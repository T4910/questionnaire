import Logo from "@/app/(routes)/(home)/_components/logo"
import SectionIndicator from "@/app/(routes)/(home)/_components/sectionIndicator"


const top = ({ sections }) => {
  return (
    <div>
        <Logo />
        <SectionIndicator sections={sections}/>
    </div>
  )
}
export default top