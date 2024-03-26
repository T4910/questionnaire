import { 
  Card,
  CardHeader,
  CardContent
} from "@/components/ui/card"

const option = ({ value, num }) => {
    const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    return (
      <Card className="w-[calc((100%-4.5rem)/4)] box-border rounded-sm h-full p-4 space-y-4 border-1 text-white bg-white bg-opacity-20 group-hover:bg-black">
        <CardHeader className="bg-neutral-100 p-0 size-7 grid place-items-center text-black rounded-sm group-hover:bg-black">{letter[num-1]}</CardHeader>
        <CardContent className="p-0">{value}</CardContent>
      </Card>
    )
}

export default option