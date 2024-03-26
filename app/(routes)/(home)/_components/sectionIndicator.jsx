'use client';
import Indicator from "@/app/(routes)/(home)/_components/indicator";
import { useContext } from "react";
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController";

const sectionIndicator = ({ sections }) => {
  const { number } = useContext(NumberContext);

  const activeSectionNumber = sections.data[number].sectionId;
  const activeSectionName = sections.names[sections.data[number].sectionId-1].name;
  const numberOfSections = sections.names.length;

  return (
    <div className="mb-5">
      <Indicator number={numberOfSections} active={activeSectionNumber} increment/>
      <div>
        <span className="text-xs">Question: {number+1} of {sections.data.length} ({activeSectionName})</span>
      </div>
    </div>
  );
};
export default sectionIndicator;