'use client'
import { useContext } from "react"
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController"
import Options from "@/app/(routes)/(home)/_components/options"
import Indicator from "@/app/(routes)/(home)/_components/optionSectionIndicator"
import Heading from "@/app/(routes)/(home)/_components/heading"


const questions = () => {
  const { number, questions, displayedOpts, originalOpts } = useContext(NumberContext)
  const question = questions.filter(data => data.id === number+1)[0].question

  return (
    <div className="space-y-6 lg:space-y-2 h-[77%] lg:h-4/5 flex flex-col">
        <Heading question={question}/>
        <div className="flex-grow flex flex-col">
            <Options list={originalOpts}/>
            <Indicator originalOpts={originalOpts} displayedOpts={displayedOpts} />
        </div>
    </div>
  )
}
export default questions