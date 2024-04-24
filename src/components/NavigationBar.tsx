import "./style.scss";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <>
      <div className='navigation-bar-wrapper'>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/courses"}>Courses</Link>
          </li>{" "}
          <li>
            <Link to={"/tutorials"}>Tutorials</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavigationBar;
