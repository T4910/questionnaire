import Controls from "@/app/(routes)/(home)/_components/controls"
import Quesitons from "@/app/(routes)/(home)/_components/questions"
import Top from "@/app/(routes)/(home)/_components/top"
import { Controller } from "@/app/(routes)/(home)/_components/questionsController"


const questionnaire = ({ questions, sections, cursor }) => {
    return (
        <Controller fetchedQuestions={questions} cursor={cursor}>
            <div className=" bg-neutral-100 h-screen w-screen md:w-full lg:w-2/3 p-2 py-4 md:p-6 lg:px-6 lg:pr-7 flex flex-col md:gap-8 lg:gap-0 lg:justify-between">
                <Top sections={sections}/>
                <Quesitons />
                <Controls totalQuestions={sections?.data?.length}/>
            </div>
        </Controller>
    )
}
export default questionnaire