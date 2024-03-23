import { cn } from "@/lib/utils"

const indicator = ({ number, dotted, active }) => {

  return (
      <div className={cn("space-y-1", dotted ? null : 'mt-5')}>
        <div className="flex space-x-3">
            {Array(number).fill(1).map((e, index) => 
              <div 
                key={index} 
                className={cn(
                  'w-20 h-1 bg-neutral-400 rounded-sm',
                  dotted ? 'size-2 rounded-full' : null,
                  (active-1 === index) ? 'bg-black' : null
                )}></div>
            )}
        </div>
        {dotted ? null : <span className="block text-xs">App requirements</span>}
      </div>
  )
}
export default indicator