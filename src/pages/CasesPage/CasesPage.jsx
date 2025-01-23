import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "components/views/casesView/Hero/Hero";
import Brief from "components/views/homeViews/Brief/Brief";

const CasesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Fragment>
        <Helmet>
          <title>
            Примеры контейнерных перевозок от компании Трансатлантик
          </title>
          <meta
            name="description"
            content="Примеры международных перевозок грузов в контейнерах, выполненных нашей командой – Трансатлантик"
          />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:title"
            content="Примеры контейнерных перевозок от компании Трансатлантик"
          />
          <meta
            property="og:description"
            content="Примеры международных перевозок грузов в контейнерах, выполненных нашей командой – Трансатлантик"
          />
          <meta property="og:image" content="assets/favicon-32x32.png" />
        </Helmet>
      </Fragment>
      <Hero />
      <Brief />
    </>
  );
};

export default CasesPage;
