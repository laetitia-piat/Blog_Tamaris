import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="main-menu">
        <a href="/" className="button logo link-button">
          <img src="../public/images/cropped-AFTC_Logo-190x189.jpg"></img>
        </a>
        <h1>TAMARIS BLOG</h1>
        <div className="buttonLink">
          <Link to="/post/new">
            <button>Publier une photo</button>
          </Link>
          <button onClick={() => {}}>Logout</button>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
