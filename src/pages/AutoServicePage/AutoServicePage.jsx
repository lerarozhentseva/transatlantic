import { Fragment, useEffect } from "react";
import Brief from "components/views/homeViews/Brief/Brief";
import Containers from "components/views/autoServiceViews/Containers/Containers";
import Hero from "components/views/autoServiceViews/Hero/Hero";
import Process from "components/views/autoServiceViews/Process/Process";
import { Helmet } from "react-helmet-async";
import Advantages from "components/views/autoServiceViews/Advantages";
import CargoForm from "components/common/CargoForm";
import Cases from "components/views/homeViews/Cases";
import MapMiddle from "components/common/MapMiddle/MapMiddle";
import OtherServices from "components/common/OtherServices/OtherServices";

const AutoServicePage = () => {
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
      <Process />
      <Advantages />
      <CargoForm />
      <Containers />
      <MapMiddle />
      <Cases />
      <OtherServices number={2} />
      <Brief />
    </>
  );
};

export default AutoServicePage;
