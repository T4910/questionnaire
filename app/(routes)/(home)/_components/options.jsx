import Option from "@/app/(routes)/(home)/_components/option"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button"

let opt = [
  'Integration with property databases for easy access to information',
  'Not likely at all',
  'Comprehensive user guides and tutorials',
  'Integration with communication channels for seamless interactions',
  // 'Providing personalized property recommendations to clients',
  // 'Not yet, but considering'
]

const options = () => {
  return (
    <div className="bg-neutral-800 rounded-sm h-80 flex flex-col p-4 space-y-2 relative text-neutral-100">
      <div className="flex justify-start space-x-6 w-[50rem] relative flex-grow">
          {
              opt.map((value, index) => <Option key={index} value={value} num={index}/>)
          }
          <Previous />
          <Next />
      </div>
      <Others />
    </div>
  )
}

const Others = () => {
  return (
    <div className="h-8 flex items-end space-x-2">
      <span>Others (Please specify): </span>
      <input type="text" placeholder="Type your answer here..." className="placeholder:py-1 inline px-1 flex-grow text-sm bg-transparent border-b border-slate-300"/>
    </div>
  )
}

const Previous = () => {
    return (
        <Button
          className="absolute opacity-30 hover:opacity-90 rounded-full bg-black -tranneutral-y-1/2 top-1/2 -left-8 z-10 text-white p-2 size-7 !m-0">
          <FaChevronLeft />
        </Button>
    )
}

const Next = () => {
    return (
        <Button
          className="absolute opacity-30 hover:opacity-90 rounded-full bg-black -tranneutral-y-1/2 top-1/2 -right-8 z-10 text-white p-2 size-7 !m-0">
          <FaChevronRight />
        </Button>
    )
}

export default options;