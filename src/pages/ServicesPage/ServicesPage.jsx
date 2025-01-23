import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Brief from "components/views/homeViews/Brief/Brief";
import Hero from "components/views/servicesViews/Hero/Hero";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Fragment>
        <Helmet>
          <title>Виды перевозок от компании Трансатлантик</title>
          <meta
            name="description"
            content="Виды перевозок грузов компании Трансатлантик"
          />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:title"
            content="Виды перевозок от компании Трансатлантик"
          />
          <meta
            property="og:description"
            content="Виды перевозок грузов компании Трансатлантик"
          />
          <meta property="og:image" content="assets/favicon-32x32.png" />
        </Helmet>
      </Fragment>
      <Hero />
      <Brief />
    </>
  );
};

export default ServicesPage;
