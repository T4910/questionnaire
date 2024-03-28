'use client'
import Option from "@/app/(routes)/(home)/_components/option"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController"
import { useEffect, useContext } from "react";

const options = ({ list }) => {
  const { number, displayedOpts, setDisplayedOpts } = useContext(NumberContext);

  
  useEffect(() => {
    setDisplayedOpts(list.slice(0,4))
  }, [number]);

  function prevOptions(){
    setDisplayedOpts(() => list.slice(0,4))
  }
  
  function nextOptions(){
    setDisplayedOpts((array) => list.slice(array.length))
  }

  const Previous = () => {
    return (
        <Button
          onClick={prevOptions}
          className="hidden md:block absolute opacity-40 hover:opacity-90 rounded-full bg-neutral-900 -translate-y-1/2 top-1/2 -left-8 z-10 text-white p-2 size-7 !m-0">
          <FaChevronLeft />
        </Button>
    )
  }

  const Next = () => {
      return (
          <Button
            onClick={nextOptions}
            className="hidden md:block absolute opacity-40 hover:opacity-90 rounded-full bg-neutral-900 -translate-y-1/2 top-1/2 -right-8 z-10 text-white p-2 size-7 !m-0">
            <FaChevronRight />
          </Button>
      )
  }

  return (
    <div className="bg-neutral-700 rounded-sm h-full lg:flex-grow flex flex-col p-4 space-y-3 lg:space-y-4 relative text-neutral-100 text-sm">
      <div className="flex justify-start gap-1 lg:gap-0 flex-wrap md:flex-nowrap md:space-x-6 size-full relative flex-grow overflow-auto lg:overflow-visible">
          {displayedOpts.map(({number, value}, index) => <Option key={index} value={value} num={number}/>)}
          {(displayedOpts[0].number !== 1) ? <Previous /> : null} 
          {(displayedOpts[displayedOpts.length-1].number !== list.length) ? <Next /> : null} 
      </div>
      <Others />
    </div>
  )
}

const Others = () => {
  return (
    <div className="h-fit flex flex-col md:flex-row lg:items-end space-y-1 lg:space-x-2">
      <span className="block lg:inline">Others (Please specify): </span>
      <input type="text" placeholder="Type your answer here..." className="placeholder:py-1 inline lg:px-1 flex-grow text-sm bg-transparent border-b border-slate-300 focus-visible:outline-none"/>
    </div>
  )
}

export default options;