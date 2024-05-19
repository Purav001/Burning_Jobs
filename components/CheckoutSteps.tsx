const CheckoutSteps = ({ current = 0 }) => {
  return (
    <ul className="steps steps-horizontal w-full mt-4 m-auto ">
      {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index) => (
          <li
            key={step}
            className={`step
           ${index <= current ? 'step-primary' : ''}
            text-[#1b2528] font-semibold text-xs md:text-base`}
          >
            {step}
          </li>
        )
      )}
    </ul>
  )
}
export default CheckoutSteps
