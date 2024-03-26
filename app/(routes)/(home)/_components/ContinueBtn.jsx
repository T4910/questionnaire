'use client'
import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController"

const ContinueBtn = () => {
    const { number, displayedOpts, setDisplayedOpts } = useContext(NumberContext);
    console.log('from context: ', number, displayedOpts)

    

    return (
      <Button className="py-1 bg-neutral-700 text-white rounded-sm">
        Continue
      </Button>
    )
}
export default ContinueBtn