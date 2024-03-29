'use client'
import Option from "@/app/(routes)/(home)/_components/option"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { ArrowDown, MoveDown } from "lucide-react";
import { useInView } from "react-intersection-observer"
import { useContext, useEffect, useRef } from "react";
import { NumberContext } from "@/app/(routes)/(home)/_components/questionsController";

const optionList = ({ isMobile, originalOpts, displayedOpts, list, setDisplayedOpts}) => {
    const {ref: lastOptionRef, inView} = useInView({ threshold: 0.35 })
    const OptionListRef  = useRef(null);
    const { setListOrientation } = useContext(NumberContext);

    useEffect(() => 
        setListOrientation(inView) // last element in view 
    ,[inView])

    const Previous = () => {
        function prevOptions(){
            setDisplayedOpts(() => list.slice(0,4))
        }

        return (
            <Button
                onClick={prevOptions}
                className="hidden lg:block absolute opacity-40 hover:opacity-90 rounded-full bg-neutral-900 -translate-y-1/2 top-1/2 -left-8 z-10 text-white p-2 size-7 !m-0">
                <FaChevronLeft />
            </Button>
        )
    }
    
    const Next = () => {
        function nextOptions(){
            setDisplayedOpts((array) => list.slice(array.length))
        }

        return (
            <Button
                onClick={nextOptions}
                className="hidden lg:block absolute opacity-40 hover:opacity-90 rounded-full bg-neutral-900 -translate-y-1/2 top-1/2 -right-8 z-10 text-white p-2 size-7 !m-0">
                <FaChevronRight />
            </Button>
        )
    }

    const Down = () => {
        function scrollDown(){
            const list = OptionListRef.current;
            if (list) { 
              const lastElement = list.lastElementChild;
              if (lastElement) {
                lastElement.scrollIntoView({ behavior: 'smooth' });
              }
            }
        };

        if(originalOpts.length <= 4) return null;
    
        return (
            <Button
                onClick={scrollDown}
                className={`${inView ? 'scale-0' : 'scale-100'} lg:hidden absolute opacity-60 hover:opacity-70 rounded-full bg-neutral-900 -translate-x-1/2 left-1/2 bottom-3 z-30 text-white px-2 py-0 h-7 w-fit`}>
                  <span className="text-xs">Scroll</span>
                  <ArrowDown />
            </Button>
        )
    }

    return (
        <div
        // h-[calc(20%*4+0.375rem*3)] 
            className="flex flex-grow content-start justify-start gap-1.5 h-full lg:gap-0 flex-wrap lg:flex-nowrap lg:space-x-6 lg:size-full relative lg:flex-grow overflow-y-auto lg:overflow-visible"
            ref={OptionListRef}
        >
            {(isMobile ? originalOpts : displayedOpts).map(({number, value}, index) => 
                <Option 
                    key={index} 
                    value={value} 
                    num={number}
                    reference={lastOptionRef}
            />)}
            {(displayedOpts[0].number !== 1 && !isMobile) ? <Previous /> : null} 
            {(displayedOpts[displayedOpts.length-1].number !== list.length && !isMobile) ? <Next /> : null} 
            <Down />
        </div>
    )
}
export default optionList