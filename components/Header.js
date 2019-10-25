import Link from "next/link";

const headerStyle = {
  marginTop: "0.5rem",
  color: "gray"
};

const Header = () => (
  <div>
    <Link href="/">
      <p style={headerStyle}>First Check-in</p>
    </Link>
  </div>
);

export default Header;
