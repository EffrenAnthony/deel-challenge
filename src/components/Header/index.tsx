import DeelLogo from "../../assets/DeelLogo.png";
import "./Header.css";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <img src={DeelLogo} />
      <p className="header__subtitle">Autocomplete</p>
    </div>
  );
};

export default Header;
