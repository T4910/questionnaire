'use client'
import { useState, createContext } from "react";

export const NumberContext = createContext();

export const Controller = ({ children, fetchedQuestions }) => {
    const [number, setNumber] = useState(0);
    const [ questions, setQuestions ] = useState(fetchedQuestions);
    
    const optionsArray = questions.map(data => data.options);
    const [displayedOpts, setDisplayedOpts] = useState(optionsArray[number].slice(0,4));

    // console.log(fetchedQuestions, 0)
  
    return (
        <NumberContext.Provider value={{number, questions, displayedOpts, setDisplayedOpts, setNumber, setQuestions}}>
            {children}
        </NumberContext.Provider>
    );
};