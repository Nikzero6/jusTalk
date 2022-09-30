const Heading = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="text-4xl font-extrabold mt-14">{title}</h1>
      <p className="text-base text-gray-500 mt-1">{subtitle}</p>
    </>
  );
};

export default Heading;
