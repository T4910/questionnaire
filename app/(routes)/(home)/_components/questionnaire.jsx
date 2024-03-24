import Logo from "@/app/(routes)/(home)/_components/logo"
import SectionIndicator from "@/app/(routes)/(home)/_components/sectionIndicator"
import Controls from "@/app/(routes)/(home)/_components/controls"
import Quesitons from "@/app/(routes)/(home)/_components/questions"
import { Controller } from "@/app/(routes)/(home)/_components/questionsController"

const questionnaire = ({ questions, numberOfSections }) => {
    const sections = questions.map(({section}, index) => {
        return {...section, index};
    });
    // console.log(sections, 0);
 
    return (
        <Controller fetchedQuestions={questions}>
            <div className="flex-grow bg-neutral-100 p-4 px-6 pr-7 flex flex-col justify-between">
                <Logo />
                <SectionIndicator numberOfSections={numberOfSections} sections={sections}/>
                <Quesitons questions={questions}/>
                <Controls numOfQuestions={questions.length}/>
            </div>
        </Controller>
    )
}
export default questionnaire