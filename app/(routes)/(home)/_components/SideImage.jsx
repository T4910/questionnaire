const images = [
  '/placeholder.jpeg',
  '/handshake.jpeg',
  '/manlookingatcomputer.jpeg'
]

const imageStyles = {
    backgroundImage: `url(${images[2]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const SideImage = () => {
  return (
    <div 
        className="bg-violet-300 w-0 hidden md:hidden lg:w-1/3 lg:block"
        style={imageStyles}    
    ></div>
  )
}
export default SideImage