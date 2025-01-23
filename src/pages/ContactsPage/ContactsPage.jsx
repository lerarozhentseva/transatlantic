import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "components/views/contactsView/Hero/Hero";
import Brief from "components/views/homeViews/Brief/Brief";

const ContactsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Fragment>
        <Helmet>
          <title>Контакты компании Трансатлантик</title>
          <meta
            name="description"
            content="Контактные данные компании Трансатлантик"
          />
          <meta property="og:type" content="webapp" />
          <meta property="og:title" content="Контакты компании Трансатлантик" />
          <meta
            property="og:description"
            content="Контактные данные компании Трансатлантик"
          />
          <meta property="og:image" content="assets/favicon-32x32.png" />
        </Helmet>
      </Fragment>
      <Hero />
      <Brief />
    </>
  );
};

export default ContactsPage;
