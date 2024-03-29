const heading = ({ question }) => {

    return (
      <div className="h-fit w-full lg:h-1/5 grid content-start flex-grow lg:flex-grow-0">
          <h1 className="text-md md:text-3xl font-medium w-full my-auto line-clamp-4">
            {question}
          </h1>
      </div>
    );
}

export default heading;