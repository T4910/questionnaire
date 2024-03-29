'use client'
import OptionList from "@/app/(routes)/(home)/_components/optionList";
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController"
import { useEffect, useContext } from "react";


const options = ({ list, isMobile }) => {
  const { number, displayedOpts, originalOpts, setDisplayedOpts } = useContext(NumberContext);

  useEffect(() => {
    setDisplayedOpts(list.slice(0,4))
  }, [number]);

  return (
    <div className="bg-neutral-700 rounded-sm h-full lg:flex-grow flex flex-col p-4 space-y-3 lg:space-y-4 relative text-neutral-100 text-sm">
      <OptionList 
          displayedOpts={displayedOpts} 
          setDisplayedOpts={setDisplayedOpts}
          originalOpts={originalOpts} 
          list={list} 
          isMobile={isMobile} 
      />
      <Others />
    </div>
  )
}

const Others = () => {
  return (
    <div className="h-fit flex flex-col lg:flex-row lg:items-end space-y-1 md:text-base lg:space-x-2">
      <span className="block lg:inline">Others (Please specify): </span>
      <input type="text" placeholder="Type your answer here..." className="placeholder:py-1 inline lg:px-1 flex-grow text-sm bg-transparent border-b border-slate-300 focus-visible:outline-none"/>
    </div>
  )
}

export default options;