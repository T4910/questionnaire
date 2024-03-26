import Logo from "@/app/(routes)/(home)/_components/logo"
import Controls from "@/app/(routes)/(home)/_components/controls"
import Quesitons from "@/app/(routes)/(home)/_components/questions"
import { Controller } from "@/app/(routes)/(home)/_components/questionsController"
import SectionIndicator from "@/app/(routes)/(home)/_components/sectionIndicator"

const questionnaire = ({ questions, sections, cursor }) => {
    return (
        <Controller fetchedQuestions={questions} cursor={cursor}>
            <div className="flex-grow bg-neutral-100 p-4 px-6 pr-7 flex flex-col justify-between">
                <Logo />
                <SectionIndicator sections={sections}/>
                <Quesitons />
                <Controls totalQuestions={sections?.data?.length}/>
            </div>
        </Controller>
    )
}
export default questionnaire