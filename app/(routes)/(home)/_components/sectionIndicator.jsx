'use client';
import Indicator from "@/app/(routes)/(home)/_components/indicator";
import { useContext } from "react";
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController";

const sectionIndicator = ({ sections }) => {
  const { number } = useContext(NumberContext);
  const activeSection = sections[number].number
  const questionsPerSec = sections.filter(data => data.number === activeSection)
  const currentQuestionInSec = questionsPerSec.findIndex(data => data.index === number)+1
  const numberOfSections = new Set(sections.map((section) => section.number)).size

  return (
    <>
      <Indicator number={numberOfSections} active={activeSection} increment/>
      <div>
        <span className="text-xs">{sections[number].name}: {currentQuestionInSec} of {questionsPerSec.length}</span>
      </div>
    </>
  );
};
export default sectionIndicator;