'use client'
import { useContext } from "react"
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController"
import Options from "@/app/(routes)/(home)/_components/options"
import Indicator from "@/app/(routes)/(home)/_components/indicator"
import Heading from "@/app/(routes)/(home)/_components/heading"

const questions = ({ questions }) => {
  const { number, displayedOpts } = useContext(NumberContext)
  const questionsList = questions.map(data => data.question);
  const optionsList = questions.map(data => data.options);

  return (
    <div className="space-y-2 flex-grow flex flex-col">
        <Heading questions={questionsList}/>
        <div>
            <Options list={optionsList}/>
            <div className={`${(optionsList[number].length/4 <= 1) ? 'invisible' : ''} grid place-items-center mt-4`}>
                <Indicator number={Math.ceil(optionsList[number].length/4)} active={Math.ceil(displayedOpts[0].number/4)} dotted/>
            </div>
        </div>
    </div>
  )
}
export default questions