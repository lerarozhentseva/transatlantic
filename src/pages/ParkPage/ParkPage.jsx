import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Brief from "components/views/homeViews/Brief/Brief";
import Advantage from "components/views/parkViews/Advantage/Advantage";
import Cargo from "components/views/parkViews/Cargo/Cargo";
import Containers from "components/views/parkViews/Containers/Containers";
import Hero from "components/views/parkViews/Hero/Hero";
import Info from "components/views/parkViews/Info/Info";

const ParkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Fragment>
        <Helmet>
          <title>
            Аренда контейнеров 40 и 20 футов для перевозки грузов от компании
            Трансатлантик
          </title>
          <meta
            name="description"
            content="Предлагаем контенеры в аренду для перевозок 40 и 20 футов в разных точках планеты, которые соответствуют самым высоким стандартам качества и безопасности. Гибкая система аренды.. Наша команда профессионалов всегда готова предоставить консультацию по выбору контейнера и подготовке груза к транспортировке – Трансатлантик"
          />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:title"
            content="Аренда контейнеров 40 и 20 футов для перевозки грузов от компании Трансатлантик"
          />
          <meta
            property="og:description"
            content="Предлагаем контенеры в аренду для перевозок 40 и 20 футов в разных точках планеты, которые соответствуют самым высоким стандартам качества и безопасности. Гибкая система аренды.. Наша команда профессионалов всегда готова предоставить консультацию по выбору контейнера и подготовке груза к транспортировке – Трансатлантик"
          />
          <meta property="og:image" content="assets/favicon-32x32.png" />
        </Helmet>
      </Fragment>
      <Hero />
      <Advantage />
      <Containers />
      <Info />
      <Cargo />
      <Brief />
    </>
  );
};

export default ParkPage;
