import { useRef, useState } from 'react'
import Image from 'next/image'
interface AccordionProps {
  question: string
  answer: string
  index: number
}

const Accordion: React.FC<AccordionProps> = ({ question, answer, index }) => {
  const [active, setActive] = useState<number | null>(null)

  const handleToggle = (currentIndex: number) => {
    setActive((prevActive) =>
      prevActive === currentIndex ? null : currentIndex
    )
  }

  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base">
      <button
        onClick={() => handleToggle(index)}
        className={`bg-transparent px-5 shadow cursor-pointer w-full h-full ${
          active == index
        }`}
      >
        <div className="py-3">
          <div className="flex items-center justify-between h-14 text-left">
            <span className="mb-4 font-bold text-center text-gray-600">
              {question}
            </span>
            <div>
              {active == index ? (
                <Image src={'minus.svg'} alt="" width={20} height={20} />
              ) : (
                <Image src={'plus.svg'} alt="" width={20} height={20} />
              )}
            </div>
          </div>
          <div
            ref={contentRef}
            className="mx-4 overflow-hidden text-left transition-all duration-500 h-full"
          >
            <div
              className={
                active == index
                  ? 'text-DarkGrayishBlue text-[1rem] w-full md:w-full p-0 m-0 cursor-pointer'
                  : 'invisible max-h-0'
              }
            >
              <span className="mb-4 text-gray-500 font-semibold w-full">
                {answer}
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default Accordion
