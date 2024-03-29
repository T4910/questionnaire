// STARTING FEATURES
// |-> add cookie accept or reject component
// |-> add cookie managments to state system
// *|-> question heading
// *|-> options component
// *|-> |-> Slider for other options
// *|-> |-> Styling for just 3 or less options
// *|-> Back and forward button
// *|-> section indicator
// *|-> image for desktop
// *|-> textarea for users to specify answer.
// *|-> pagination fetching of questions
// *|-> storing initial state in webiste link query
// *|-> adding url state managment system

// BUGS
// *|-> Question/Options synchronization
// *|-> Option section button toggling problem
// *|-> Fix styling and responsivness for desktop devices

// ERROR HANDLING
// |-> Add loading component to options component if questions haven't fetched (use skeleton -> shadcn-ui)
// *|-> Ensure proper security of urls 

// FORM Submission
// |-> Ability to select options & add checkbox component to option when selected
// |-> Automaticallly moves to the next page when option selected
// |-> Situation where user reselects options, disable automatically move to next page
// |-> Save all current form state such that if I go back, I see all the options selected and option section still showing
// |-> Periodically or progressively send to database 
// |-> Mute, disable & remove state in options if user writes in `Other (please specify):`
// |-> Add a tooltip for in case user wants to select options and still has `Other (please specify):` filled
 
// ANIMATION
// |-> inner options slider
// |-> outer options slider
// |-> Fade in and out for question heading
// |-> Confirmation animation when option is selected (like typeform)
// |-> Animation for section indicator

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
  const sections = {
    names: await fetchSectionNames(),
    data: await fetchSectionsData()
  }

  // validation check
  let cursor = searchParams?.q ?? 1;
  const numberOfQuestions = sections.data.length;

  cursor = parseInt(cursor);
  if(isNaN(cursor) || cursor < 1) cursor = 1;
  if(cursor > numberOfQuestions) cursor = numberOfQuestions;
  
  const questions = await fetchInitialQuestions(10, cursor);
  
  return (
    <div className="flex w-[100dvw] h-[100dvh] lg:w-screen lg:h-screen bg-red-400">
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