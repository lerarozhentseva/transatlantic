import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Brief from "components/views/homeViews/Brief/Brief";
import Hero from "components/views/multiServiceViews/Hero/Hero";
import Cases from "components/views/homeViews/Cases";
import MapMiddle from "components/common/MapMiddle/MapMiddle";
import Advantages from "components/views/multiServiceViews/Advantages";
import CargoForm from "components/common/CargoForm";
import Routes from "components/views/multiServiceViews/Routes";
import About from "components/views/multiServiceViews/About";
import OtherServices from "components/common/OtherServices/OtherServices";

const MultiServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Fragment>
        <Helmet>
          <title>
            Международные перевозки грузов в контейнерах 40 и 20 футов от
            компании Трансатлантик
          </title>
          <meta
            name="description"
            content="Перевозка грузов в контейнерах 40 и 20 футов по морю и железнодорожным путям в Россию и за ее границы с гибкой и удобной логистикой для клиентов. Лояльная система оплаты. Перевезем ваш груз под ключ – Трансатлантик"
          />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:title"
            content="Международные перевозки грузов в контейнерах 40 и 20 футов от компании Трансатлантик"
          />
          <meta
            property="og:description"
            content="Перевозка грузов в контейнерах 40 и 20 футов по морю и железнодорожным путям в Россию и за ее границы с гибкой и удобной логистикой для клиентов. Лояльная система оплаты. Перевезем ваш груз под ключ – Трансатлантик"
          />
          <meta property="og:image" content="assets/favicon-32x32.png" />
        </Helmet>
      </Fragment>
      <Hero />
      <About />
      <Routes />
      <Advantages />
      <CargoForm />
      <MapMiddle />
      <Cases />
      <OtherServices number={3} />
      <Brief />
    </>
  );
};

export default MultiServicePage;
