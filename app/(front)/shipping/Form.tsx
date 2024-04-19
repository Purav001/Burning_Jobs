'use client'
import CheckoutSteps from '@/components/CheckoutSteps'
import useCartService from '@/lib/hooks/useCartStore'
import { ShippingAddress } from '@/lib/models/OrderModel'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, ValidationRule, useForm } from 'react-hook-form'

const Form = () => {
  const router = useRouter()
  const { saveShippingAddrress, shippingAddress } = useCartService()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddress>({
    defaultValues: {
      fullName: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
    },
  })

  useEffect(() => {
    setValue('fullName', shippingAddress.fullName)
    setValue('address', shippingAddress.address)
    setValue('city', shippingAddress.city)
    setValue('postalCode', shippingAddress.postalCode)
    setValue('country', shippingAddress.country)
  }, [setValue, shippingAddress])

  const formSubmit: SubmitHandler<ShippingAddress> = async (form) => {
    saveShippingAddrress(form)
    router.push('/payment')
  }

  const FormInput = ({
    id,
    name,
    required,
    pattern,
  }: {
    id: keyof ShippingAddress
    name: string
    required?: boolean
    pattern?: ValidationRule<RegExp>
  }) => (
    <div className="mb-2">
      <label className="label" htmlFor={id}>
        {name}
      </label>
      <input
        type="text"
        id={id}
        {...register(id, {
          required: required && `${name} is required`,
          pattern,
        })}
        className="input input-bordered w-full"
      />
      {errors[id]?.message && (
        <div className="text-error">{errors[id]?.message}</div>
      )}
    </div>
  )

  return (
    <div className="grid  justify-items-center m-auto w-full">
      <div className="w-full">
        <CheckoutSteps current={1} />
      </div>
      <div className="max-w mx-auto card bg-[#fffbe8] mt-4 mb-10">
        <div className="card-body">
          <h1 className="card-title m-auto">Shipping Address</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <FormInput name="Full Name" id="fullName" required />
            <FormInput name="Address" id="address" required />
            <div className="lg:flex md:flex">
              <div className="lg:w-1/2 md:w-1/2">
                <FormInput name="City" id="city" required />
              </div>
              <div className="lg:w-1/2 md:w-1/2 lg:ml-5 md:ml-5">
                <FormInput name="Postal Code" id="postalCode" required />
              </div>
            </div>

            <FormInput name="Country" id="country" required />
            <div className="mb-2 mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting && (
                  <span className="loading loading-spinner"></span>
                )}
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Form
