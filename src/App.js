import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import SunAndSea from "./assets/Layout/bg3.jpg";
import Pokemon from "./assets/Layout/bg2.jpg";

function App() {
  return (
    <>
      <Header title="Hello, world!" descr="Intro to React" />
      <Layout
        title="This is block one"
        descr="Hello, world! Hello, world! Hello, world!"
        urlBg={SunAndSea}
      />
      <Layout
        title="This is block two"
        descr="Hello, world! Hello, world! Hello, world!"
        colorBg="grey"
      />
      <Layout
        title="This is block three"
        descr="Hello, world! Hello, world! Hello, world!"
        urlBg={Pokemon}
      />
      <Footer />
    </>
  );
}

export default App;
