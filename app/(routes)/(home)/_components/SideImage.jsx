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
        className="bg-violet-300 w-1/3"
        style={imageStyles}    
    >
        
    </div>
  )
}
export default SideImage