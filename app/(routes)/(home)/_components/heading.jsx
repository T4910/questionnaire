const heading = ({ question }) => {

    return (
      <div className="h-1/4 grid content-start">
          <h1 className="text-3xl font-medium w-[46rem] my-auto">
            {question}
          </h1>
      </div>
    );
}

export default heading;