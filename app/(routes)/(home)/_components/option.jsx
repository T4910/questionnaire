import { 
  Card,
  CardHeader,
  CardContent
} from "@/components/ui/card"

const option = ({ value, num }) => {
    const letter = ['A', 'B', 'C', 'D', 'E', 'F'];

    return (
      <Card className="w-[calc((100%-4.5rem)/4)] box-border rounded-sm h-full p-4 space-y-4 border-1 text-white bg-white bg-opacity-20">
        {/* <div className="bg-neutral-100 w-1/4 h-full grid place-items-start p-4 box-border"> */}
        <CardHeader className="bg-neutral-100 p-0 size-7 grid place-items-center text-black rounded-sm">{letter[num]}</CardHeader>
        <CardContent className="p-0">{value}</CardContent>
      </Card>
    )
}

const tag = ({ value }) => {
  return(
    <div className="bg-neutral-100 w-1/4 h-full grid place-items-start p-4 box-border"></div>
  )
}

export default option