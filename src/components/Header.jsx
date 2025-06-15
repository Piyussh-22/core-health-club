import logo from "../assets/logo.png";
const Header = () => {
  return (
    <>
      <div className="header-container rounded-full  w-[80%] m-2 px-4 py-2 shadow-lg mx-auto bg-grey ">
        <div className="logo flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 object-contain " />
          <div className="">Core Health Club</div>
        </div>
      </div>
    </>
  );
};

export default Header;
