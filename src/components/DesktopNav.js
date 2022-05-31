import { useState } from "react";
import ArrowUp from "../images/icon-arrow-up.svg";
import ArrowDown from "../images/icon-arrow-down.svg";
import TodoList from "../images/icon-todo.svg";
import Calendar from "../images/icon-calendar.svg";
import Reminders from "../images/icon-reminders.svg";
import Planning from "../images/icon-planning.svg";

function DesktopNav() {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  function toggleFeatures() {
    if (features === false) {
      setFeatures(true);
      setCompany(false);
    } else setFeatures(false);
  }
  function toggleCompany() {
    if (company === false) {
      setCompany(true);
      setFeatures(false);
    } else setCompany(false);
  }

  return (
    <nav className="nav-container">
      <div className="desktopNav">
        <div className="desktopNav__dropMenu">
          <button className="desktopNav__menuBtn" onClick={toggleFeatures}>
            Features <img src={features ? ArrowDown : ArrowUp} alt="" />
          </button>
          <ul
            className={`${
              features ? "desktopNav__list" : "desktopNav__list--hidden"
            } desktopNav__list--features`}
          >
            <li className="desktopNav__item">
              <a href="." className="desktopNav__link">
                <div className="link-icon">
                  <img src={TodoList} alt="" />
                </div>
                <p>Todo List</p>
              </a>
            </li>
            <li className="desktopNav__item">
              <a href="." className="desktopNav__link">
                <div className="link-icon">
                  <img src={Calendar} alt="" />
                </div>
                <p>Calendar</p>
              </a>
            </li>
            <li className="desktopNav__item">
              <a href="." className="desktopNav__link">
                <div className="link-icon">
                  <img src={Reminders} alt="" />
                </div>
                <p>Reminders</p>
              </a>
            </li>
            <li className="desktopNav__item">
              <a href="." className="desktopNav__link">
                <div className="link-icon">
                  <img src={Planning} alt="" />
                </div>
                <p>Planning</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="desktopNav__dropMenu">
          <button className="desktopNav__menuBtn" onClick={toggleCompany}>
            Company <img src={company ? ArrowDown : ArrowUp} alt="" />
          </button>
          <ul
            className={`${
              company ? "desktopNav__list" : "desktopNav__list--hidden"
            } desktopNav__list--company`}
          >
            <li className="desktopNav__item">
              <a href="." className="desktopNav__link">
                History
              </a>
            </li>
            <li className="desktopNav__item">
              <a href="." className="desktopNav__link">
                Our Team
              </a>
            </li>
            <li className="desktopNav__item">
              <a href="." className="desktopNav__link">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <a href="." className="desktopNav__navLink">
          Careers
        </a>
        <a href="." className="desktopNav__navLink">
          About
        </a>
      </div>
      <div className="logNav">
        <button className="logNav__btn logNav__lgoin">Login</button>
        <button className="logNav__btn logNav__register">Register</button>
      </div>
    </nav>
  );
}

export default DesktopNav;
