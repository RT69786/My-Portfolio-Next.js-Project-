import Header from "./components/Header/Header";
import Main01 from "./components/Main01/Main01";
import Main02 from "./components/Main02/Main02";
import Main04 from "./components/Main04/Main04";
import Main03 from "./components/Main03/Main03";

import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <section id="home" data-theme="dark">
        <Header />
      </section>

      <section id="about" data-theme="light">
        <Main01 />
      </section>

      <section id="work" data-theme="light">
        <Main02 />
      </section>

      <Main03 />

      <Main04 />

      <Footer />
    </>
  );
}
