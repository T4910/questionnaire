'use client'
import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/navigation"

export const NumberContext = createContext();

export const Controller = ({ children, fetchedQuestions, cursor }) => {
    const [number, setNumber] = useState(cursor-1);
    const router = useRouter();
    const fetchingOffset = 5;

    const [ questions, setQuestions ] = useState(fetchedQuestions);
    
    const optionsArray = questions.filter(data => data.id === number+1)[0].options;
    
    const [displayedOpts, setDisplayedOpts] = useState(optionsArray.slice(0,4));
    
    useEffect(() => router.replace(`?q=${number+1}`), [number]); // adds a parameter to url
  
    return (
        <NumberContext.Provider value={{
            number, 
            questions, 
            originalOpts: optionsArray,
            offset: fetchingOffset, 
            displayedOpts, 
            setDisplayedOpts, 
            setNumber, 
            setQuestions
        }}>
            {children}
        </NumberContext.Provider>
    );
};