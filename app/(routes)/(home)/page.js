// question heading
// options component
// |-> Slider for other options
// |-> Styling for just 3 or less options
// Back and forward button
// pagination fetching of questions
// section indicator
// image for desktop
// textarea for users to specify answer.

// admin page for adding or removing options to questions
// csv downloader from database

// UI for mobile version
// |-> vertical slider for options 

import Questionnaire from "@/app/(routes)/(home)/_components/questionnaire";
import SideImage from "@/app/(routes)/(home)/_components/SideImage";

export default function Home() {
  // fetch intial and to-come questions orderly per section
  const questions = [
    {
      question: 'What are the most time-consuming tasks in your daily routine that you believe could be automated through an app?',
      options: [
          {number:1, value: 'Information with easy access to information'},
          {number:2, value: 'Integration with television channels for shows'},
          {number:3, value: 'Most likely'},
          {number:4, value: 'guides and tutorials'},
          {number:5, value: 'Integration with communication channels for seamless interactions'},
          {number:6, value: 'Providing personalized property recommendations to clients'},
          {number:7, value: 'Not yet, but considering'},
      ],
      section: {
        number: 1,
        name: 'General requirements'
      }
    },
    {
    question: 'What do you do?',
      options: [
        {number:1, value: 'Integration with property databases for easy access to information'},
        {number:2, value: 'Integration with communication channels for seamless interactions'},
        {number:3, value: 'Not likely at all'},
        {number:4, value: 'Comprehensive user guides and tutorials'},
        {number:5, value: 'Integration with co for seamless interactions'},
        {number:6, value: 'Providing personalized property recommendations to clients'},
      ],
      section: {
        number: 1,
        name: 'General requirements'
      }
    },
    {
      question: 'Have you used any real estate apps or platforms to assist with your daily tasks?',
      options: [
        {number:1, value: 'databases for easy access to information'},
        {number:2, value: 'munication channels for seamless interactions'},
        {number:3, value: 'Not likely at all'},
        {number:4, value: 'Comprehensive user guides and tutorials'},
        {number:5, value: 'Integration with communication channels for seamless interactions'},
        {number:6, value: 'Providing personalized property recommendations to clients'},
        {number:7, value: 'Not yet, but considering'},
        {number:8, value: 'Not yet, but ering I thingsddsd'}
      ],
      section: {
        number: 1,
        name: 'General requirements'
      }
    },
    {
      question: 'What are the least tasks in your weekly life?',
      options: [
          {number:1, value: 'Integration with property databases for easy access to information'},
          {number:2, value: 'Integration with communication channels for seamless interactions'},
          {number:3, value: 'Not likely at al like biscutiel'},
          {number:4, value: 'Comprehensive user  tutorials'},
      ],
      section: {
        number: 2,
        name: 'App requirements'
      }
    },
    {
    question: 'What do you do with your dogs and cats?',
      options: [
          {number:1, value: 'Integration with property databases for easy access to information'},
          {number:2, value: 'Integration with communication channels for seamless interactions'},
          {number:3, value: 'Not likely at all'},
          {number:4, value: 'Comprehensive user guides and tutorials'},
          {number:5, value: 'Integration with commun interactions'},
      ],
      section: {
        number: 2,
        name: 'App requirements'
      }
    },
    {
      question: 'Have you used any school apps or platforms to assist with internet in LMU?',
      options: [
        {number:1, value: 'Integration with property databases for easy access to information'},
        {number:2, value: 'Integration hannels for seamless interactions'},
        {number:3, value: 'Not likely at all'},
        {number:4, value: 'Comprehensive user guides and tu vanillar is torials'},
        {number:5, value: 'Integration with communication channels for seamless interactions'},
        {number:6, value: 'Providing personalized property  recommendations to clients'},
        {number:7, value: 'Not yet, but considering'},
      ],
      section: {
        number: 2,
        name: 'App requirements'
      }
    },
    {
      question: 'What is an app?',
      options: [
          {number:1, value: 'Integration with property databases for easy access to information'},
          {number:2, value: 'Integration with communication channels for seamless interactions'},
          {number:3, value: 'Not yet, but considering I thingsddsd'}
      ],
      section: {
        number: 3,
        name: 'AI requirements'
      }
    },
    {
    question: 'Are you still here?',
      options: [
          {number:1, value: 'Integration with property databases for easy access to information'},
          {number:2, value: 'Integration with communicjation channels for seamless interactions'},
          {number:3, value: 'Not likely at all'},
          {number:4, value: 'Comprehensive user guides jericho fell and tutorials'},
          {number:5, value: 'Integration with communication channels for seamless interactions'},
          {number:6, value: 'Providing personalized property recommendations to clients'},
          {number:7, value: 'Not yet, but considering'},
      ],
      section: {
        number: 3,
        name: 'AI requirements'
      }
    },
    {
      question: 'Can you guess what this website is for?',
      options: [
        {number:1, value: 'Integration with property databases for easy access to information'},
        {number:2, value: 'Integration with communication channels for seamless interactions'},
        {number:3, value: 'Not likely at all bushy meat is bad for you'},
        {number:4, value: 'Comprehensive user guides and tutorials'},
        {number:5, value: 'Integration with communication channels for seamless interactions'},
        {number:6, value: 'Providing personalized property recommendations to clients'},
        {number:7, value: 'Not yet, but considering'},
        {number:8, value: 'Not yet, but considering I thingsddsd'}
      ],
      section: {
        number: 3,
        name: 'AI requirements'
      }
    },
  ]

  // temporal logics to replace db
  // Must fetch all the sections (no pagination)
  let sections = questions.map(({section}, index) => {
    return {...section, index};
  });

  return (
    <div className="flex size-full h-screen bg-red-400">
      <SideImage />
      <Questionnaire questions={questions} sections={sections}/>
    </div>
  );
}
