const heading = ({ question }) => {

    return (
      <div className="w-full h-1/4 md:h-[36%] grid content-start lg:flex-grow-0">
          <h1 className="text-md md:text-3xl font-medium w-full my-auto line-clamp-4">
            {question}
          </h1>
      </div>
    );
}

export default heading;