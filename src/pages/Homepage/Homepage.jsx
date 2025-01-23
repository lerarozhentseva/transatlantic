import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Advantage from "components/views/homeViews/Advantage";
import Brief from "components/views/homeViews/Brief/Brief";
import Cases from "components/views/homeViews/Cases";
import Convenient from "components/views/homeViews/Convenient";
import Hero from "components/views/homeViews/Hero/Hero";
import CarWhiteBgFirst from "components/views/homeViews/CarWhiteBgFirst/CarWhiteBgFirst";
import CarWhiteBgFirstSecond from "components/views/homeViews/CarWhiteBgFirstSecond";
import CarWhiteBgFirstThird from "components/views/homeViews/CarWhiteBgFirstThird";
import Team from "components/views/homeViews/Team";
import MapMiddle from "components/views/homeViews/MapMiddle/MapMiddle";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Fragment>
        <Helmet>
          <title>
            Международные перевозки грузов контейнерами от компании
            Трансатлантик
          </title>
          <meta
            name="description"
            content="Международная логистика под ключ и перевозка грузов в контейнерах на экспорт и импорт. Предоставляем клиентам гибкие и удобные условия. Трансатлантик – ваш лучший партнер в логистике"
          />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:title"
            content="Международные перевозки грузов контейнерами от компании
            Трансатлантик"
          />
          <meta
            property="og:description"
            content="Международная логистика под ключ и перевозка грузов в контейнерах на экспорт и импорт. Предоставляем клиентам гибкие и удобные условия. Трансатлантик – ваш лучший партнер в логистике"
          />
          <meta property="og:image" content="assets/favicon-32x32.png" />
        </Helmet>
      </Fragment>
      <Hero />
      <Advantage />
      <Convenient />
      <CarWhiteBgFirst />
      <CarWhiteBgFirstSecond />
      <CarWhiteBgFirstThird />
      <MapMiddle isHomepage />
      <Cases isHomepage />
      <Team color="dark" />
      <Brief />
    </>
  );
};

export default Homepage;
