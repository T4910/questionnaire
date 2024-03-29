import Indicator from "@/app/(routes)/(home)/_components/indicator"

const optionSectionIndicator = ({ originalOpts, displayedOpts }) => {
    return (
      <div className={`${(originalOpts.length/4 <= 1) ? 'invisible' : ''} hidden lg:grid place-items-center mt-4`}>
          <Indicator number={Math.ceil(originalOpts.length/4)} active={Math.ceil(displayedOpts[0].number/4)} dotted/>
      </div>
    )
}
export default optionSectionIndicator