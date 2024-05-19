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
    <div className="w-full px-2 pt-4 text-lg lg:text-base">
      <button
        onClick={() => handleToggle(index)}
        className={`w-full h-full px-5 py-3 text-left bg-transparent shadow cursor-pointer ${active == index ? 'active' : ''
          }`}
      >
        <div className="flex items-center justify-between h-14">
          <span className="font-bold text-gray-600 text-xs md:text-base">
            {question}
          </span>
          <div className="flex-shrink-0">
            {active == index ? (
              <Image src={'/minus.svg'} alt="Collapse" width={20} height={20} />
            ) : (
              <Image src={'/plus.svg'} alt="Expand" width={20} height={20} />
            )}
          </div>
        </div>
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-500 ${active == index ? 'max-h-96' : 'max-h-0'
            }`}
        >
          <div className="p-4 text-gray-500 font-semibold text-xs md:text-base">
            {answer}
          </div>
        </div>
      </button>
    </div>
  )
}

export default Accordion
