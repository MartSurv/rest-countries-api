import { connect } from "react-redux";

import { changeTheme } from "../actions";

import "./Header.css";

function Header({ changeTheme, selectedTheme }) {
  return (
    <header className="header">
      <h1 className="heading-1">Where in the world?</h1>
      <div
        className="header__mode"
        onClick={() => (selectedTheme === "light" ? changeTheme("dark") : changeTheme("light"))}
      >
        <svg className="icon">
          <use
            xlinkHref={`sprite.svg#icon-${
              selectedTheme === "light" ? "brightness_4" : "brightness_low"
            }`}
          ></use>
        </svg>
        <p className="header__mode-text">
          {selectedTheme === "light" ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return { selectedTheme: state.selectedTheme };
};

export default connect(mapStateToProps, { changeTheme })(Header);
