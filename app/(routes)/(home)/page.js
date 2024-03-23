// question heading
// options component
// |-> Slider for other options
// |-> Styling for just 3 or less options
// Back and forward button
// pagination fetching of questions
// section indicator
// image for desktop
// textarea for users to specify answer.

// admin page for adding or removing answers to questions
// csv downloader from database

// UI for mobile version
// |-> vertical slider for options 

import Questionnaire from "@/app/(routes)/(home)/_components/questionnaire";
import SideImage from "@/app/(routes)/(home)/_components/SideImage";

export default function Home() {
  return (
    <div className="flex size-full h-screen bg-red-400">
      <Questionnaire />
      <SideImage />
    </div>
  );
}
