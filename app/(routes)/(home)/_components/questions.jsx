'use client'
import { useContext, useEffect, useState } from "react"
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController"
import Options from "@/app/(routes)/(home)/_components/options"
import Indicator from "@/app/(routes)/(home)/_components/optionSectionIndicator"
import Heading from "@/app/(routes)/(home)/_components/heading"


const questions = () => {
  const { number, questions, displayedOpts, originalOpts } = useContext(NumberContext)
  const [ isMobile, setIsMobile ] = useState(false);
  const question = questions.filter(data => data.id === number+1)[0].question
  
  // window element isn't accessible until componennt is fully mounted
  useEffect(() => {
    const largeWidthScreen = 1024;
    const currentScreenWidth = window.screen.availWidth;

    setIsMobile(parseInt(currentScreenWidth) < parseInt(largeWidthScreen));
  } , [])

  return (
    <div className=" lg:space-y-2 h-[77%] space-y-1 lg:h-4/5 flex flex-col justify-between">
        <Heading question={question}/>
        <div className="flex flex-col h-full flex-end flex-grow lg:flex-grow">
            <Options list={originalOpts} isMobile={isMobile}/>
            <Indicator originalOpts={originalOpts} displayedOpts={displayedOpts} isMobile={isMobile}/>
        </div>
    </div>
  )
}
export default questions