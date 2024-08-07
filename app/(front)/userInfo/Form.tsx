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
    // add default values
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
        className="input input-bordered w-full bg-white text-gray-600 text-semibold text-xs md:text-base"
    />
    {errors[id]?.message && (
        <div className="text-error">{errors[id]?.message}</div>
    )}
    </div>
)

return (
    <div className="grid  justify-items-center m-auto w-full" style={{paddingTop:'100px'}}>
    <div className="w-full">
        <CheckoutSteps current={1} />
    </div>
    <div className="max-w mx-auto card bg-[#f6f1ee] mt-4 mb-10">
        <div className="card-body">
        <h1 className="card-title m-auto text-[#4F4A45] text-bold text-base md:text-base">
            User Information
        </h1>
        <form
            className="text-[#4F4A45] font-semibold"
            onSubmit={handleSubmit(formSubmit)}
        >
            <FormInput name="Full Name" id="fullName" required />
            <FormInput name="Contact Number" id="contactNumber" required />
            <FormInput name="Email Id" id="email" required />


            <div className="mb-2 mt-10">
            <button
                type="submit"
                disabled={isSubmitting}
                className="btn  w-full bg-[#4F4A45] text-[#F6F1EE] hover:bg-[#F6F1EE] hover:text-[#4F4A45] text-sm md:text-base"
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
