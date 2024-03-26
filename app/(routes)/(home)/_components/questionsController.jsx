'use client'
import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/navigation"

export const NumberContext = createContext();

export const Controller = ({ children, fetchedQuestions, cursor }) => {
    const [number, setNumber] = useState(cursor-1);
    const router = useRouter();

    const [ questions, setQuestions ] = useState(fetchedQuestions);
    
    const optionsArray = questions.filter(data => cursor === data.id)[0].options;
    
    const [displayedOpts, setDisplayedOpts] = useState(optionsArray.slice(0,4));
    
    useEffect(() => router.replace(`?q=${number+1}`), [number]); // adds a parameter to url
  
    return (
        <NumberContext.Provider value={{
            number, 
            questions, 
            originalOpts: optionsArray, 
            displayedOpts, 
            setDisplayedOpts, 
            setNumber, 
            setQuestions
        }}>
            {children}
        </NumberContext.Provider>
    );
};