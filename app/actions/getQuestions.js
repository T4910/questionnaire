'use server'
import { db } from "@/lib/db"


export async function getPreviousQuestions(amount, cursor = 1){
    try {
        const questionsBefore = await db.question.findMany({
          take: amount,
          skip: 1, // Skip the cursor-th question
          orderBy: { id: 'desc' },
          cursor: { id: cursor },
          include: {options: true, section: true},
        });
       
    
        questionsBefore.reverse(); //mutates 
        return questionsBefore;

      } catch (error) {
        console.error('Error fetching questions:', error);
        return null;
      }
}

export async function getNextQuestions(amount, cursor = 1){
    try {
        const questionsAfter = await db.question.findMany({
          take: amount, // Ensures that the exact number from parameter `number` of questions are taken
          skip: 1, // Skip the cursor-th question
          orderBy: { id: 'asc' },
          cursor: { id: cursor },
          include: {options: true, section: true},
        });
    
    
        return questionsAfter;
        
      } catch (error) {
        console.error('Error fetching questions:', error);
        return null;
      }
}

export default async function getQuestions(amount, cursor = 1){
    try {
      const questionsBefore = await db.question.findMany({
        take: amount,
        orderBy: { id: 'desc' },
        cursor: { id: cursor },
        include: {options: true, section: true},
      });
  
      const questionsAfter = await db.question.findMany({
        take: amount-1, // Ensures that the exact number from parameter `number` of questions are taken
        skip: 1, // Skip the cursor-th question
        orderBy: { id: 'asc' },
        cursor: { id: cursor },
        include: {options: true, section: true},
      });
  
      questionsBefore.reverse(); //mutates 
      
      return [...questionsBefore, ...questionsAfter];
    } catch (error) {
      console.error('Error fetching questions:', error);
      return null;
    }
}