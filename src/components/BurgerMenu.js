import { slide as Menu } from "react-burger-menu";
import { useAuth } from "../context/AuthContext";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

const BurgerMenu = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleClick = () => {
    logout();
    history.push("/");
  };

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "28px",
      height: "28px",
      right: "36px",
      top: "10px",
    },
    bmBurgerBars: {
      background: "#000000",
    },
    bmBurgerBarsHover: {
      background: "#000000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#000000",
    },
    bmMenuWrap: {
      position: "fixed",
      top: "0",
      height: "100%",
    },
    bmMenu: {
      background: "#f4f9f9",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "3em 0.8em 1rem",
    },
  };

  return (
    <div className="burger-menu">
      <Menu width={250} styles={styles} right noOverlay disableAutoFocus>
        <div
          className="sidebar-links"
          style={{ lineHeight: "3rem", height: "100%", width: "100%" }}
        >
          <div className="profile-icon d-flex justify-content-center align-items-center flex-wrap">
            <ProfileIcon avatar={currentUser.photoURL} />
            <h4 style={{ color: "#000", padding: "1rem", fontWeight: "700" }}>
              {currentUser.displayName}
            </h4>
          </div>
          <div className="composebtn">
            <Link to="/compose">
              <Button variant="secondary" size="sm" className="w-100">
                Compose
              </Button>
            </Link>
          </div>
          <div className="signout">
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={handleClick}
              className="signout-btn btn"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
