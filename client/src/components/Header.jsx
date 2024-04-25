import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header container">
      <h1 className="header_title">
        Виртуальный ассисент по выбору компьютерной техники
      </h1>
      <div className="header_signin_button">
        <Link to={"/signin"} style={{ color: "white" }}>
          <Button
            variant="contained"
            sx={{
              marginRight: "57px",
              marginBottom: "10px",
              width: "120px",
              backgroundColor: "#5068F2",
            }}
          >
            Войти
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
