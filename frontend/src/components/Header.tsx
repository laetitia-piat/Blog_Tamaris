import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-15">
      <div className="flex flex-row justify-between items-center">
        <div>
          <a href="/" className="">
            <img src="../public/images/cropped-AFTC_Logo-190x189.jpg"></img>
          </a>
        </div>
        <div>
          <h1 className="text-5xl text-[#4c7d48] font-bold">TAMARIS BLOG</h1>
        </div>
        <div className="flex flex-col">
          <button
            className="bg-[#4c7d48] p-2  rounded-full text-white"
            onClick={() => {}}
          >
            Logout
          </button>
          <Link to="/login">
            <button className="bg-[#4c7d48] p-2 w-32  rounded-full text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
