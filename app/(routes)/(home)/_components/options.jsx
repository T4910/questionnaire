import Option from "@/app/(routes)/(home)/_components/option"

const options = () => {
  return (
    <div className="bg-blue-200 flex space-x-6 w-full p-4">
        {
            Array(4).fill(1).map((e, index) => <Option key={index} />)
        }
    </div>
  )
}

const nextButton = () => {
    return (
        <button>{'>'}</button>
    )
}

export default options;