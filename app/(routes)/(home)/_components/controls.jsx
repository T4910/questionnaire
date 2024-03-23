import Back from "@/app/(routes)/(home)/_components/BackBtn"
import Continue from "@/app/(routes)/(home)/_components/ContinueBtn"

const controls = () => {
  return (
    <div className="flex space-x-5">
        <Back />
        <Continue />
    </div>
  )
}
export default controls