const Navbar = () => {
  return (
    <>
      <div className="w-screen shadow-md absolute flex justify-center text-slate-800 items-center gap-5 p-5 top-0 bg-slate-200 text-xl">
        <h1 className="hover:text-slate-600 cursor-pointer ">Home</h1>
        <h1 className="hover:text-slate-600 cursor-pointer ">About</h1>
        <h1 className="hover:text-slate-600 cursor-pointer ">Projects</h1>
        <h1 className="hover:text-slate-600 cursor-pointer ">Contact</h1>
      </div>
    </>
  );
};

export default Navbar;
