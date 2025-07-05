const HeadingText = ({
  mainTitle,
  highlightTitle,
  mainDescription,
  highlightDescription,intro
}) => {
  return (
    <div className="w-full lg:w-3/5 mx-auto text-center">
      <div className="text-center my-4">
        <code> {intro} </code>
      </div>
      <h1 className="text-3xl font-semibold text-textColor lg:text-4xl">
        {mainTitle} <span className="text-terColor">{highlightTitle}</span>
      </h1>
      <p className="mt-3 text-textColor">
        {mainDescription}
        <span className="font-medium text-terColor"> {highlightDescription}</span> !
      </p>
    </div>
  );
};

export default HeadingText;
