'use client';
import Indicator from "@/app/(routes)/(home)/_components/indicator";
import { useContext } from "react";
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController";

const sectionIndicator = ({ sections }) => {
  const { number } = useContext(NumberContext);

  const activeSectionNumber = sections.questions[number].sectionId;
  const activeSectionName = sections.names[sections.questions[number].sectionId-1].name;
  const numberOfSections = sections.names.length;

  return (
    <>
      <Indicator number={numberOfSections} active={activeSectionNumber} increment/>
      <div>
        <span className="text-xs">{activeSectionName}: {number+1} of {sections.questions.length}</span>
      </div>
    </>
  );
};
export default sectionIndicator;