'use client'
import CheckoutSteps from '@/components/CheckOutSteps'
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
    // defaultValues: {
    //   fullName: '',
    //   address: '',
    //   city: '',
    //   postalCode: '',
    //   contactNumber: 0,
    //   country: '',
    // },
})

useEffect(() => {
    setValue('fullName', shippingAddress.fullName)
    setValue('contactNumber', shippingAddress.contactNumber)
    setValue('email', shippingAddress.email)
}, [setValue, shippingAddress])

const formSubmit: SubmitHandler<ShippingAddress> = async (form) => {
    saveShippingAddrress(form)
    router.push('/place-order')
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
    <label className="label text-xs md:text-base" htmlFor={id}>
        {name}
    </label>
    <input
        type="text"
        id={id}
        {...register(id, {
        required: required && `${name} is required`,
        pattern,
        })}
        className="input input-bordered w-full max-w-sm"
    />
    {errors[id]?.message && (
        <div className="text-error">{errors[id]?.message}</div>
    )}
    </div>
)

return (
    <div className="grid  justify-items-center m-auto w-full" style={{paddingTop:'100px'}}>
    <div className="w-full">
        <CheckoutSteps current={0} />
    </div>
    <div className="max-w mx-auto card bg-[#1b2528] mt-4 mb-10 max-w-sm  ">
        <div className="card-body">
        <h1 className="card-title m-auto  text-bold font-bold text-base md:text-base">
            User Information
        </h1>
        <form
            className="font-semibold"
            onSubmit={handleSubmit(formSubmit)}
        >
            <FormInput name="Full Name" id="fullName" required />
            <FormInput name="Contact Number" id="contactNumber" required />
            <FormInput name="Email Id" id="email" required />
            <div className="mb-2 mt-10">
            <button
                type="submit"
                disabled={isSubmitting}
                className="btn  w-full bg-[#feca3a] text-[#000] hover:bg-[#F6F1EE] hover:bg-[rgba(254,194,27,1)] text-sm md:text-base"
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
