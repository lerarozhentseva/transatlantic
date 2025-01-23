import { Helmet } from "react-helmet-async";
import { Fragment, useEffect } from "react";
import Hero from "components/views/aboutViews/Hero/Hero";
import About from "components/views/aboutViews/About/About";
import Mission from "components/views/aboutViews/Mission/Mission";
import Values from "components/views/aboutViews/Values/Values";
import Info from "components/views/aboutViews/Info/Info";
import Gallery from "components/views/aboutViews/Gallery/Gallery";
import Brief from "components/views/homeViews/Brief";
import Team from "components/views/aboutViews/Team";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Fragment>
        <Helmet>
          <title>О компании Трансатлантик</title>
          <meta
            name="description"
            content="Трансатлантик это 50 специалистов по международной логистике под ключ, сотрудничество с нами - это гарантия безопасной и эффективной транспортировки вашего груза."
          />
          <meta property="og:type" content="webapp" />
          <meta property="og:title" content="О компании Трансатлантик" />
          <meta
            property="og:description"
            content="Трансатлантик это 50 специалистов по международной логистике под ключ, сотрудничество с нами - это гарантия безопасной и эффективной транспортировки вашего груза."
          />
          <meta property="og:image" content="assets/favicon-32x32.png" />
        </Helmet>
      </Fragment>
      <Hero />
      <About />
      <Mission />
      <Values />
      <Gallery />
      <Team color="blue" />
      <Info />
      <Brief />
    </>
  );
};

export default AboutPage;
