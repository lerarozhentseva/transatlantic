import { Link } from "react-scroll";
import { parkPage } from "constants";
import containerTunk from "../../../../../src/assets/images/park/container-tunk.png";
import styles from "./containers.module.css";

const Containers = () => {
  return (
    <section className={styles.containers}>
      <div className={styles.containers__container}>
        <h3 className={styles.containers__title}>Виды контейнеров</h3>
        <ul className={styles.common__list}>
          {parkPage.map(
            ({
              id,
              img,
              heading,
              descr,
              weight,
              volume,
              length,
              width,
              height,
              property,
            }) => {
              return (
                <li key={id} className={styles.common__item}>
                  <div className={styles.containers__common}>
                    <div className={styles.containers__wrapper}>
                      <img
                        className={styles.containers__img}
                        src={img}
                        alt="container"
                      />
                    </div>
                    <h4 className={styles.containers__heading}>{heading}</h4>
                    <p className={styles.containers__descr}>{descr}</p>
                    <ul className={styles.containers__list}>
                      <li className={styles.containers__item}>
                        <div className={styles.containers__info}>
                          <span className={styles.containers__subheading}>
                            Max загрузка (кг)
                          </span>
                          <span className={styles.containers__value}>
                            {weight}
                          </span>
                        </div>
                      </li>
                      <li className={styles.containers__item}>
                        <div className={styles.containers__info}>
                          <span className={styles.containers__subheading}>
                            Объем (м³)
                          </span>
                          <span className={styles.containers__value}>
                            {volume}
                          </span>
                        </div>
                      </li>
                      <li className={styles.containers__item}>
                        <div className={styles.containers__info}>
                          <span className={styles.containers__subheading}>
                            Внутренние размеры
                          </span>
                          <div className={styles.parameter__wrapper}>
                            <span className={styles.containers__parameter}>
                              {length}
                              <span className={styles.parameter__bold}>
                                &times;
                              </span>
                            </span>
                            <span className={styles.containers__parameter}>
                              {width}
                              <span className={styles.parameter__bold}>
                                &times;
                              </span>
                            </span>
                            <span className={styles.containers__parameter}>
                              {height}
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className={styles.containers__item}>
                        <div className={styles.containers__info}>
                          <span className={styles.containers__subheading}>
                            Стенки и крыша
                          </span>
                          <span className={styles.containers__value}>
                            {property}
                          </span>
                        </div>
                      </li>
                    </ul>
                    <Link
                      to="brief"
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className={styles.container__btn}
                    >
                      Арендовать
                    </Link>
                  </div>
                </li>
              );
            }
          )}
        </ul>

        <div className={styles.tanks}>
          <div className={styles.tanks__wrapper}>
            <img
              className={styles.tanks__img}
              src={containerTunk}
              alt="container"
            />
          </div>
          <h4 className={styles.containers__heading}>Нестандартный груз?</h4>
          <p className={styles.containers__descr}>
            Поможем подобрать подходящее оборудование для перевозки любого
            нестандартного груза и организуем его перевозку
          </p>
          <Link
            to="brief"
            smooth={true}
            offset={-150}
            duration={500}
            className={styles.container__btn}
          >
            Связаться
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Containers;
