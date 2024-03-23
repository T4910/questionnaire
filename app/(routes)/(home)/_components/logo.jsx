import Image from 'next/image'

const logo = () => {
  return (
    <div className="flex items-center space-x-1">
        <div className='size-5 relative'>
          <Image src={'/logoddd.jpg'}  fill/>
        </div>
        <span className="font-semibold">Floo</span>
    </div>
  )
}
export default logo