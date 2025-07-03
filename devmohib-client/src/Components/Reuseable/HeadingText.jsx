const HeadingText = ({ 
  mainTitle, 
  highlightTitle, 
  mainDescription, 
  highlightDescription 
}) => {
  return (
    <div className="w-full lg:w-1/2 mx-auto text-center">
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
