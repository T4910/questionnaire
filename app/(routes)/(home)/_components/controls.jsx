'use client'
import { useContext } from "react"
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController"
import { Button } from "@/components/ui/button"

const controls = ({ numOfQuestions }) => {
    const { number, setNumber } = useContext(NumberContext);

    const Back = () => {
      return (
        <Button 
          onClick={() => setNumber((num) => num-1)}
          disabled={(number <= 0)}
          className="py-1 rounded-sm border-2 border-neutral-300"
          variant='outline' 
        >
          Back
        </Button>
      )
    }
    
    const Continue = () => {
      return (
        <Button 
          onClick={() => setNumber((num) => num+1)}
          disabled={(number+1 === numOfQuestions)}
          className="py-1 bg-neutral-700 text-white rounded-sm"
        >
          Continue
        </Button>
      )
    }
    
    const Submit = () => {
      return (
        <Button 
          onClick={console.log('submitted')}
          className="py-1 bg-neutral-700 text-white rounded-sm"
        >
          Submit
        </Button>
      )
    }

    return (
      <div className="flex justify-end space-x-5">
          {(number > 0) ? <Back /> : null}
          {(number+1 < numOfQuestions) ? <Continue /> : <Submit />}
      </div>
    )
}

export default controls