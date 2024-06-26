import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Refund Policy - Nani's Bilona Ghee`,
  description: `Nani's Bilona Ghee Refund Policy: Transparency & Satisfaction Guaranteed`,
}

export default async function RefundPolicy() {
  return (
    <div className="container my-10 mx-auto md:px-6">
      <h2 className="mb-5 text-center text-base md:text-4xl font-bold text-[#1b2528]">
        Refund policy
      </h2>
      <p className=" mb-5  text-[#1b2528] text-sm md:text-base">
        We have a 2-day exchange/return policy, which means you have 2 days
        after receiving your item to request a replacement or a return. For
        exchange/return, you can contact us at customer@nanibilonaghee.com.
      </p>
      <h2 className="  font-bold text-[#1b2528] text-base md:text-2xl">
        Exchanges and Returns
      </h2>
      <p className="mb-5   text-[#1b2528] text-sm md:text-base">
        To be eligible for an exchange/return, your item must be in the same
        condition that you received it, unused and in its original packaging. To
        complete your exchange/return, the invoice must be provided at the time
        of return pickup. Once used, products will be ineligible for exchange or
        return.
      </p>

      <h2 className=" font-bold text-[#1b2528] text-sm md:text-base">
        Exchanges/Returns are only allowed in the following unlikely cases:
      </h2>

      <ul className="mb-5">
        <li className="text-[#1b2528] text-sm md:text-base">
          The product is damaged or if you received the wrong item.
        </li>
        <li className="text-[#1b2528] text-sm md:text-base">
          The product is not sealed properly at the time of delivery.
        </li>
        <li className="text-[#1b2528] text-sm md:text-base">
          The product has expired by the time of delivery.
        </li>
      </ul>

      <p className="text-[#1b2528] text-sm md:text-base">
        If your return is accepted, we will pick up the item ordered from the
        same address, and you will be notified of the expected pick-up date.
      </p>
      <p className="text-[#1b2528] text-sm md:text-base">
        In case of an exchange, the product will be delivered to you within 3-5
        days after the return pick-up is done.
      </p>

      <p className="text-[#1b2528] text-sm md:text-base">
        In case of any delivery related discrepancy, please reach out to us
        within 48 hours after the order been marked as delivered.
      </p>

      <span className="text-[#1b2528] font-bold text-sm md:text-base">
        Note:
      </span>
      <p className="text-[#1b2528] mb-5 text-sm md:text-base">
        In case of any quality issue, kindly contact us on +91 8198985878 or
        drop a mail to us at customer@nanibilonaghee.
      </p>

      <h2 className=" font-bold text-[#1b2528] text-sm md:text-base">
        Cancellation:
      </h2>

      <ul className="mb-5">
        <li className="text-[#1b2528] text-sm md:text-base">
          An order cancellation request will be accepted only if we have not yet
          shipped the product.
        </li>
        <li className="text-[#1b2528] text-sm md:text-base">
          If a cancellation request is accepted, you are entitled to get a
          refund of the entire amount.
        </li>
        <li className="text-[#1b2528] text-sm md:text-base">
          Nani&apos;s Bilona Ghee reserves the right to cancel or refuse to
          accept any order placed for various reasons, including but not limited
          to the non-availability of stock, pricing errors, informational errors
          or problems identified with the personal/financial details provided by
          the customer.
        </li>
      </ul>

      <h2 className=" font-bold text-[#1b2528] text-sm md:text-base">
        Refunds:
      </h2>
      <p className="text-[#1b2528] text-sm md:text-base">
        Once your return is received and inspected, we will notify you that we
        have received your returned item. We will also notify you if the refund
        was approved or not. If approved, you&apos;ll be automatically refunded
        on your original payment method. Please note that it generally takes
        around 5-7 days to reflect this amount.
      </p>
    </div>
  )
}
