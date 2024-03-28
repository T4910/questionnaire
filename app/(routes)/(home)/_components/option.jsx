'use client'
import { 
  Card,
  CardHeader,
  CardContent
} from "@/components/ui/card"
import { getNextQuestions } from "@/app/actions/getQuestions"
import { useContext } from "react"
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController"



const option = ({ value, num }) => {
    const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const { number, questions, setNumber, setQuestions, offset } = useContext(NumberContext);

    async function nextQuestions(){
      if(number+1 === questions.length) return

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

    function selectOption(){
      console.log(num, value)

      nextQuestions()
    }

    // h-[calc((100%-(0.25rem*4))/5)]
    return (
      <Card 
        onClick={selectOption}
        className="flex flex-row lg:flex-col w-full box-border rounded-sm h-12 text-xs md:text-base md:h-full md:w-[calc((100%-(1.5rem*3))/4)] p-1.5 px-3 md:p-4 space-x-3 md:space-x-0 items-center md:items-start md:space-y-4 border-1 text-white bg-white bg-opacity-20 group-hover:bg-black">
        <CardHeader className="bg-neutral-100 p-0 size-7 grid place-items-center text-black rounded-sm group-hover:bg-black">{letter[num-1]}</CardHeader>
        <CardContent className="p-0 w-11/12">{value}</CardContent>
      </Card>
    )
}



export default option