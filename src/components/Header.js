import headerLogo from "../images/header__logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Logo del encabezado, con la frase 'Alrededor de Chile'"
      />
      <span className="header__line"></span>
    </header>
  );
}
