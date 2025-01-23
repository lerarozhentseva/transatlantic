import { servicesPage } from "constants";
import styles from "./routes.module.css";
import RoutesList from "./RoutesList";

const Routes = () => {
  const serviceEl = servicesPage?.find((el) => el.path === "5") || {};
  const routes = serviceEl?.routes?.routes || [];

  return (
    <section className={styles.routes}>
      <div className={styles.routes__container}>
        <div className={styles.routes__left}>
          <h3 className={styles.routes__title}>{serviceEl?.routes?.heading}</h3>
        </div>
        <div className={styles.routes__right}>
          <RoutesList routes={routes} />
        </div>
      </div>
    </section>
  );
};

export default Routes;
