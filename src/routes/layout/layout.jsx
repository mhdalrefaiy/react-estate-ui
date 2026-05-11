import Navbar from "../../components/navbar/Navbar";
import HomePage from "../homePage/homePage";
import "./layout.scss";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <HomePage />
    </div>
  );
}

export default Layout;
