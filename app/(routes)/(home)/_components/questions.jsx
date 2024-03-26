'use client'
import { useContext } from "react"
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController"
import Options from "@/app/(routes)/(home)/_components/options"
import Indicator from "@/app/(routes)/(home)/_components/indicator"
import Heading from "@/app/(routes)/(home)/_components/heading"

const questions = () => {
  const { number, questions, displayedOpts, originalOpts } = useContext(NumberContext)
  const question = questions.filter(data => data.id === number+1)[0].question

  return (
    <div className="space-y-2 flex-grow flex flex-col">
        <Heading question={question}/>
        <div>
            <Options list={originalOpts}/>
            <div className={`${(originalOpts.length/4 <= 1) ? 'invisible' : ''} grid place-items-center mt-4`}>
                <Indicator number={Math.ceil(originalOpts.length/4)} active={Math.ceil(displayedOpts[0].number/4)} dotted/>
            </div>
        </div>
    </div>
  )
}
export default questions