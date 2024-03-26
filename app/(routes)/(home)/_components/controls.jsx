'use client'
import { useContext } from "react"
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController"
import { Button } from "@/components/ui/button"
import { getNextQuestions, getPreviousQuestions } from "@/app/actions/getQuestions"
import { useRouter } from "next/navigation"


const controls = ({ totalQuestions }) => {
    const router = useRouter();
    const offset = 5;
    const { number, questions, setNumber, displayedOpts, setQuestions } = useContext(NumberContext);

    async function previousQuestions(){
      // move to previous questions
      setNumber((num) => num-1);

      // fetch previous questions
      if(questions[0].id !== 1 && questions[0].id + offset === number){
        let fetchedQuestions;
      
        try {
          console.log('fetching questions from client side');
          fetchedQuestions = await getPreviousQuestions(10, number - offset);
      
        } catch (error) {
          console.log('An error occured on client side while trying to fetch quesitons: ', error)
        }
      
        setQuestions(questions => {
          console.log('Added fetched questions: ', [...fetchedQuestions, ...questions]);
          return [...fetchedQuestions, ...questions];
        });
      }
    }

    async function nextQuestions(){
      // move to next questions
      setNumber((num) => num+1);

      
      // fetch next questions
      if(number === questions.length - offset && totalQuestions !== questions.length){
        let fetchedQuestions;
    
        try {
          console.log('fetching questions from client side');
          fetchedQuestions = await getNextQuestions(10, number + offset);
    
        } catch (error) {
          console.log('An error occured on client side while trying to fetch quesitons: ', error)
        }
    
        console.log('Next questions: ', fetchedQuestions);
        setQuestions(questions => {
          console.log('Added fetched questions: ', [...fetchedQuestions, ...questions]);
          return [...questions, ...fetchedQuestions];
        });
      }
    }

    const Back = () => {
      return (
        <Button 
          onClick={previousQuestions}
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
          onClick={nextQuestions}
          disabled={(number+1 === questions.length)} // keeping it on controlled question instead totalQuestions to disable if no questions available
          className="py-1 bg-neutral-700 text-white rounded-sm"
        >
          Continue
        </Button>
      )
    }
    
    const Submit = () => {
      return (
        <Button 
          onClick={() => console.log('submitted')}
          className="py-1 bg-neutral-700 text-white rounded-sm"
        >
          Submit
        </Button>
      )
    }

    return (
      <div className="flex justify-end space-x-5">
          {(number > 0) ? <Back /> : null}
          {(number+1 < totalQuestions) ? <Continue /> : <Submit />}
      </div>
    )
}

export default controls