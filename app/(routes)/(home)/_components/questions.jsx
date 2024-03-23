import Options from "@/app/(routes)/(home)/_components/options"
import Indicator from "@/app/(routes)/(home)/_components/indicator"
import Heading from "@/app/(routes)/(home)/_components/heading"

const questions = ({ questions }) => {
  return (
    <div className="space-y-2 flex-grow flex flex-col">
        <Heading question={questions[2].question}/>
        <div>
            <Options />
            <div className="grid place-items-center mt-4">
                <Indicator number={3} active={1} dotted/>
            </div>
        </div>
    </div>
  )
}
export default questions