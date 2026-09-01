import logo from "../.././images/logo.svg";

export default function Header() {
  return (
    <header className="header page__section">
      <img
        alt="Logotipo Around The U.S."
        className="logo header__logo"
        src={logo}
      />
    </header>
  );
}
