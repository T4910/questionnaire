const heading = ({ question }) => {

    return (
      <div className="h-fit lg:h-1/5 grid content-start">
          <h1 className="text-md md:text-3xl font-medium w-full my-auto">
            {question}
          </h1>
      </div>
    );
}

export default heading;