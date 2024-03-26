import { cn } from "@/lib/utils"

const indicator = ({ number, dotted, active, increment }) => {

  return (
      <div className={cn("space-y-1", dotted ? null : 'mt-5')}>
        <div className="flex space-x-3">
            {Array(number).fill(1).map((e, index) => 
              <div 
                key={index} 
                className={cn(
                  'w-1/12 h-1 bg-neutral-400 rounded-sm',
                  dotted ? 'size-2 rounded-full' : null,
                  (increment ? index+1 <= active : index === active-1) ? 'bg-neutral-700' : null
                )}></div>
            )}
        </div>
      </div>
  )
}
export default indicator