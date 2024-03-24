'use client'
import { useContext } from "react"
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController"

const heading = ({ questions }) => {
    const { number } = useContext(NumberContext);

    return (
      <div className="flex-grow grid  content-start mt-5">
          <h1 className="text-3xl font-medium w-[46rem] my-auto">
            {/* <span>{number+1}{'.) '}</span> */}
            {questions[number]}
          </h1>
      </div>
    );
}

export default heading;