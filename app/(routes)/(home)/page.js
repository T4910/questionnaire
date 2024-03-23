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
  const questions = [
    {
      question: 'What are the most time-consuming tasks in your daily routine that you believe could be automated through an app?',
      answers: [
        'Lead generation',
        'Client communication',
        'Market analysis',
        'Paperwork management',
        'Appointment scheduling',
      ],
      section: 1
    },
    {
    question: 'What do you do?',
      answers: [
        'Lead generation',
        'Client communication',
        'Market analysis',
        'Paperwork management',
        'Appointment scheduling',
        'Disturbance excuses',
      ],
      section: 1
    },
    {
      question: 'Have you used any real estate apps or platforms to assist with your daily tasks?',
      answers: [
        'Lead generation',
        'Client communication',
        'Market analysis',
        'Paperwork management',
      ],
      section: 1
    },
    {
      question: 'What are the most time-consuming tasks in your daily routine that you believe could be automated through an app?',
      answers: [
        'Lead generation',
        'Client communication',
        'Market analysis',
        'Paperwork management',
        'Appointment scheduling',
      ],
      section: 2
    },
    {
    question: 'What do you do?',
      answers: [
        'Lead generation',
        'Client communication',
        'Market analysis',
        'Paperwork management',
        'Appointment scheduling',
        'Disturbance excuses',
      ],
      section: 2
    },
    {
      question: 'Have you used any real estate apps or platforms to assist with your daily tasks?',
      answers: [
        'Lead generation',
        'Client communication',
        'Market analysis',
        'Paperwork management',
      ],
      section: 2
    },
    {
      question: 'What are the most time-consuming tasks in your daily routine that you believe could be automated through an app?',
      answers: [
        'Lead generation',
        'Client communication',
        'Market analysis',
        'Paperwork management',
        'Appointment scheduling',
      ],
      section: 3
    },
    {
    question: 'What do you do?',
      answers: [
        'Lead generation',
        'Client communication',
        'Market analysis',
        'Paperwork management',
        'Appointment scheduling',
        'Disturbance excuses',
      ],
      section: 3
    },
    {
      question: 'Have you used any real estate apps or platforms to assist with your daily tasks?',
      answers: [
        'Lead generation',
        'Client communication',
        'Market analysis',
        'Paperwork management',
      ],
      section: 3
    },
  ]

  return (
    <div className="flex size-full h-screen bg-red-400">
      <Questionnaire questions={questions}/>
      <SideImage />
    </div>
  );
}
