import "./Header.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <header className="header">

        <div className="logo-section">
          <img src={logo} alt="RGPV Logo" />
        </div>

        <div className="title-section">

          <h1>
            Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
          </h1>

          <h2>Results</h2>

        </div>

        <div className="portal-text">
          RGPV Portal
        </div>

      </header>

      <div className="header-bottom"></div>

      <div className="back-link">

        <a href="#">
          Back
        </a>

      </div>
    </>
  );
}