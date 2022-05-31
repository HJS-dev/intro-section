import React, { useState } from "react";
import Todo from "../images/icon-todo.svg";
import Calendar from "../images/icon-calendar.svg";
import Reminders from "../images/icon-reminders.svg";
import Planning from "../images/icon-planning.svg";
import MneuBtn from "../images/icon-menu.svg";
import CloseMenu from "../images/icon-close-menu.svg";
import up from "../images/icon-arrow-up.svg";
import down from "../images/icon-arrow-down.svg";


function MobileMenu() {
  const [active, setActive] = useState(false);
    const [feature, setFeature] = useState(false)
    const [company, setCompany] = useState(false)
  function toggleMenu() {
        console.log('clicked')
      if (active === false) {
          setActive(true);
          document.body.style.overflowY = "hidden";
      } else {
        setActive(false);
        document.body.style.overflowY = "initial";
      }
      
    }
    function toggleFeature() {
            console.log('F')
            if (feature === false) {
                setFeature(true)
                // setCompany(false)
            }
            else setFeature(false)
    }
    function toggleCompany() {
        console.log('C')
        if (company === false) {
            setCompany(true)
            // setFeature(false)
        }
        else setCompany(false)
    }
        
  return (
    <nav className="nav-bar">
      <button className="menuBtn" onClick={toggleMenu}>
        <img src={active ? CloseMenu : MneuBtn} alt="" />
      </button>
      <div className={`${active ? "mobile-menu" : "mobile-menu--hidden"}`}>
        <div className="mobile-menu__dropLink">
          <p onClick={toggleFeature}>
            Features <img src={feature ? down : up} alt="" />
          </p>
          <ul
            className={`${
              feature ? "mobile-menu__list--active" : "mobile-menu__list"
            }`}
          >
            <li className="mobile-menu__item">
              <a href="c" className="mobile-menu__link mobile-menu__link--margin">
                <div className="logo-link">
                  <img src={Todo} alt="" />
                </div>
                <p>Todo List</p>
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="fg" className="mobile-menu__link mobile-menu__link--margin">
                <div className="logo-link">
                  <img src={Calendar} alt="" />
                </div>
                <p>Calendar</p>
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="r" className="mobile-menu__link mobile-menu__link--margin">
                <div className="logo-link">
                  <img src={Reminders} alt="" />
                </div>
                <p>Reminders</p>
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="p" className="mobile-menu__link ">
                <div className="logo-link">
                  <img src={Planning} alt="" />
                </div>
                <p>Planning</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-menu__dropLink">
          <p onClick={toggleCompany}>
            Company <img src={company ? down : up} alt="" />
          </p>
          <ul
            className={`${
              company ? "mobile-menu__list--active" : "mobile-menu__list"
            } mobile-menu__list--padding`}
          >
            <li className="mobile-menu__item">
              <a href="c" className="mobile-menu__link mobile-menu__link--margin">
                <p>Todo List</p>
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="fg" className="mobile-menu__link mobile-menu__link--margin">
                <p>Calendar</p>
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="r" className="mobile-menu__link ">
                <p>Blog</p>
              </a>
            </li>
          </ul>
        </div>
        <a href="c" className="mobile-menu__link mobile-menu__link--margin">
          <p>Careers</p>
        </a>
        <a href="a" className="mobile-menu__link mobile-menu__link--margin">
          <p>About</p>
        </a>
        <div className="mobile-menu__login">
          <button className="btn btn--login">Login</button>
          <button className="btn btn--register">Register</button>
        </div>
      </div>
    </nav>
  );
}

export default MobileMenu;
