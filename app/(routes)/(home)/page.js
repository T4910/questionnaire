// *question heading
// *options component
// *|-> Slider for other options
// *|-> Styling for just 3 or less options
// *Back and forward button
// *section indicator
// *image for desktop
// *textarea for users to specify answer.
// *pagination fetching of questions
// storing initial state in webiste link query
// adding route state managment system
// add cookie accept or reject component
// add cookie managments to state system

// ADMIN
// |-> csv downloader from database
// |-> Add a table filled with questions currently in db
// |-> Add a ability to edit values in table
// |-> Add a ability to add and delete quesiton
// |-> (opt) edit the order in which quesitons appear

// UI for mobile version
// |-> vertical slider for options 

import Questionnaire from "@/app/(routes)/(home)/_components/questionnaire";
import SideImage from "@/app/(routes)/(home)/_components/SideImage";
import { db } from "@/lib/db"

export default async function Home({ searchParams }) {
  // validation check
  let cursor = searchParams?.q ?? 1;
  cursor = parseInt(cursor);
  if(isNaN(cursor)) cursor = 1;

  const questions = await fetchInitialQuestions(10, cursor);
  
  const sections = {
    names: await fetchSectionNames(),
    data: await fetchSectionsData()
  }
  
  return (
    <div className="flex size-full h-screen bg-red-400">
      <SideImage />
      <Questionnaire 
        questions={questions} 
        sections={sections}
        cursor={cursor}
      />
    </div>
  );
}

async function fetchSectionNames(){
  let sectionsName;

  try {
    sectionsName = await db.section.findMany({ 
      select: { id: true, name: true } 
    })
  } catch (error) {
    console.log(error)
  }

  return sectionsName;
}

async function fetchSectionsData(){
  let sections;

  try {
    sections = await db.question.findMany({
      select: { sectionId: true },
    });
  } catch (error) {
    console.log(error);
  }

  return sections;
}

async function fetchInitialQuestions(number, cursor = 1){ 
  // `number` parameter dictates the number questions gotten after the cursor 
  // number and the number of questions gotten before the cursor including the cursor itself
  // this means if `number` is 5, the number of questions returned is naturally 10

  try {
    const questionsBefore = await db.question.findMany({
      take: number,
      orderBy: { id: 'desc' },
      cursor: { id: cursor },
      include: {options: true, section: true},
    });

    const questionsAfter = await db.question.findMany({
      take: number,
      skip: 1, // Skip the cursor-th question
      orderBy: { id: 'asc' },
      cursor: { id: cursor },
      include: {options: true, section: true},
    });

    questionsBefore.reverse() // mutates 

    return [...questionsBefore, ...questionsAfter];
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
}