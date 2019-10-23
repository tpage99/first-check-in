import Head from "next/head";

import Header from "./Header";

const layoutStyle = {
  border: "1px solid #DDD",
  borderRadius: "10px",
  maxWidth: "80%",
  height: "80vh",
  margin: "auto",
  padding: "3rem",
  fontSize: "2rem",
  fontFamily: "Roboto, sans-serif"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <title>First Check-in</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
        key="google-font-roboto"
      />
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
