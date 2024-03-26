const heading = ({ question }) => {

    return (
      <div className="flex-grow grid  content-start mt-5">
          <h1 className="text-3xl font-medium w-[46rem] my-auto">
            {question}
          </h1>
      </div>
    );
}

export default heading;