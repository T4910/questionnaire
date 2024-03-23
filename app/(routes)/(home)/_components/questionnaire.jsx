import Logo from "@/app/(routes)/(home)/_components/logo"
import Indicator from "@/app/(routes)/(home)/_components/indicator"
import Controls from "@/app/(routes)/(home)/_components/controls"
import Quesitons from "@/app/(routes)/(home)/_components/questions"

const questionnaire = ({ questions }) => {
    // const numberOfSections = questions.
 
    return (
        <div className="flex-grow bg-neutral-100 p-4 px-6 pr-7 flex flex-col justify-between">
            <Logo />
            <Indicator number={3} active={1}/>
            <Quesitons questions={questions}/>
            <Controls />
        </div>
    )
}
export default questionnaire