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
        className="bg-violet-300 lg:w-1/3 hidden lg:block w-0"
        style={imageStyles}    
    ></div>
  )
}
export default SideImage