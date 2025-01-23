import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { casesPage } from "constants";
import styles from "./solution.module.css";

const Solution = () => {
  const [width, setWidth] = useState(0);
  const { caseID } = useParams();
  const caseEl = casesPage?.find((el) => el.path === caseID) || {};
  const descrs = caseEl?.solution?.descr;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <section className={styles.solution}>
      <div className={styles.solution__container}>
        <div className={styles.solution__left}>
          <h3 className={styles.solution__title}>{caseEl?.solution?.title}</h3>
        </div>
        <div className={styles.solution__right}>
          {caseEl.case !== "china" && (
            <p className={styles.solution__descr}>
              {caseEl?.solution?.descr[0]?.text}
            </p>
          )}
          {caseEl.case === "china" && (
            <>
              <ul className={styles.solution__list}>
                {descrs?.map(({ id, text, heading }) => {
                  return (
                    <li key={id} className={styles.solution__item}>
                      <h5 className={styles.solution__heading}>{heading}</h5>
                      <p className={styles.solution__descr}>{text}</p>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          <div className={styles.solution__bottom}>
            {caseEl.case === "china" && (
              <>
                <h5 className={styles.solution__bottomTitle}>
                  {caseEl?.solution?.cargoTitle}
                </h5>
                <div className={styles.solution__imagesWrapper}>
                  {width >= 320 && width < 768 && (
                    <>
                      <img
                        src={caseEl?.solution?.cargoSolutionBigMobile}
                        alt="images solution"
                      />

                      <div className={styles.solution__imagesWrapperBottom}>
                        <img
                          src={caseEl?.solution?.cargoSolutionSmallLeftMobile}
                          alt="images solution"
                        />
                        <img
                          src={caseEl?.solution?.cargoSolutionSmallRightMobile}
                          alt="images solution"
                        />
                      </div>
                    </>
                  )}
                  {width >= 768 && width <= 1180 && (
                    <>
                      <img
                        src={caseEl?.solution?.cargoSolutionBigTablet}
                        alt="images solution"
                      />

                      <div className={styles.solution__imagesWrapperBottom}>
                        <img
                          src={caseEl?.solution?.cargoSolutionSmallLeftTablet}
                          alt="images solution"
                        />
                        <img
                          src={caseEl?.solution?.cargoSolutionSmallRightTablet}
                          alt="images solution"
                        />
                      </div>
                    </>
                  )}
                  {width >= 1440 && (
                    <>
                      <img
                        src={caseEl?.solution?.cargoSolutionBigDesktop}
                        alt="images solution"
                      />

                      <div className={styles.solution__imagesWrapperBottom}>
                        <img
                          src={caseEl?.solution?.cargoSolutionSmallLeftDesktop}
                          alt="images solution"
                        />
                        <img
                          src={caseEl?.solution?.cargoSolutionSmallRightDesktop}
                          alt="images solution"
                        />
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
