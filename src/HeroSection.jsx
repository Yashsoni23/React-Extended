const HeroSection = (props) => {
  return (
    <>
      <div className="bg-yellow-50 flex w-full h-screen">
        <div className="w-1/2 flex p-10 flex-col gap-2 justify-center h-full bg-yellow-200">
          <h1 className="text-4xl text-red-600 font-bold ">{props?.name}</h1>
          <h1 className="text-xl  text-blue-500 font-semibold">
            {props?.description}
          </h1>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center bg-yellow-500">
          <img src="/vite.svg" alt="" width={300} height={300} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
