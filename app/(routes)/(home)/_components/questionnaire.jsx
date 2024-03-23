import Logo from "@/app/(routes)/(home)/_components/logo"
import Indicator from "@/app/(routes)/(home)/_components/indicator"
import Heading from "@/app/(routes)/(home)/_components/heading"
import Options from "@/app/(routes)/(home)/_components/options"
import OptionsIndicator from "@/app/(routes)/(home)/_components/sliderIndicator"
import Controls from "@/app/(routes)/(home)/_components/controls"

const questionnaire = () => {
  return (
    <div className="flex-grow bg-green-300 p-4">
        <Logo />
        <Indicator />
        <Heading />
        <Options />
        <OptionsIndicator />
        <Controls />
    </div>
  )
}
export default questionnaire