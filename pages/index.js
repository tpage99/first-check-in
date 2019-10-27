import Link from "next/link";

import Layout from "../components/MyLayout.js";

const buttonStyle = {
  color: "white",
  backgroundColor: "green",
  padding: "1rem",
  borderRadius: "10px",
  fontSize: "2rem"
};

const Index = () => (
  <Layout>
    <section style={{ margin: `auto`, textAlign: `center` }}>
      <h1 style={{ marginTop: `8rem` }}>Welcome to First Check-in!</h1>
      <Link href="/register">
        <button style={buttonStyle}>Register Family</button>
      </Link>
    </section>
  </Layout>
);

export default Index;
