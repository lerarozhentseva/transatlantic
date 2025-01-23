import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { casesPage } from "constants";
import styles from "./result.module.css";

const Result = () => {
  const { caseID } = useParams();
  const caseEl = casesPage?.find((el) => el.path === caseID) || {};
  const results = caseEl?.result?.results;
  const [width, setWidth] = useState(0);

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
    <section className={styles.result}>
      <div className={styles.result__container}>
        <div className={styles.result__left}>
          <h3 className={styles.result__title}>{caseEl?.result?.title}</h3>
        </div>
        <div className={styles.result__right}>
          <div className={styles.result__top}>
            <ul className={styles.result__list}>
              {results?.map(({ id, text, number }) => {
                return (
                  <li key={id} className={styles.result__item}>
                    <span className={styles.result__number}>{number}</span>
                    <p className={styles.result__descr}>{text}</p>
                  </li>
                );
              })}
            </ul>

            <p className={styles.result_subDescr}>{caseEl?.result?.subDescr}</p>
          </div>
          <div className={styles.result__imagesWrapper}>
            {caseEl.case === "india" && (
              <>
                {width >= 320 && width < 768 && (
                  <>
                    <div className={styles.result__imagesContainerBig}>
                      <img
                        src={caseEl?.result?.indiaResultFirstMobile}
                        alt={caseEl?.result?.alt}
                      />
                    </div>
                    <div className={styles.result__imagesContainerBig}>
                      <img
                        src={caseEl?.result?.indiaResultSecondMobile}
                        alt={caseEl?.result?.alt}
                      />
                    </div>
                  </>
                )}
                {width >= 768 && width < 1180 && (
                  <>
                    <div className={styles.result__imagesContainerBig}>
                      <img
                        src={caseEl?.result?.indiaResultFirstTablet}
                        alt={caseEl?.result?.alt}
                      />
                    </div>
                    <div className={styles.result__imagesContainerBig}>
                      <img
                        src={caseEl?.result?.indiaResultSecondTablet}
                        alt={caseEl?.result?.alt}
                      />
                    </div>
                  </>
                )}
                {width >= 1180 && (
                  <>
                    <div className={styles.result__imagesContainerBig}>
                      <img
                        src={caseEl?.result?.indiaResultFirstDesktop}
                        alt={caseEl?.result?.alt}
                      />
                    </div>
                    <div className={styles.result__imagesContainerBig}>
                      <img
                        src={caseEl?.result?.indiaResultSecondDesktop}
                        alt={caseEl?.result?.alt}
                      />
                    </div>
                  </>
                )}
              </>
            )}

            {caseEl.case === "china" && (
              <>
                {width >= 320 && width < 768 && (
                  <>
                    <div className={styles.result__imagesContainerBig}>
                      <img
                        src={caseEl?.result?.cargoResultFirstMobile}
                        alt={caseEl?.result?.alt}
                      />
                    </div>
                  </>
                )}
                {width >= 768 && width < 1180 && (
                  <>
                    <div className={styles.result__imagesContainerBig}>
                      <img
                        src={caseEl?.result?.cargoResultFirstTablet}
                        alt={caseEl?.result?.alt}
                      />
                    </div>
                  </>
                )}
                {width >= 1180 && (
                  <>
                    <div className={styles.result__imagesContainerBig}>
                      <img
                        src={caseEl?.result?.cargoResultFirstDesktop}
                        alt={caseEl?.result?.alt}
                      />
                    </div>
                  </>
                )}
              </>
            )}

            {caseEl.case === "china-second" ||
              (caseEl.case === "china-third" && (
                <>
                  {width >= 320 && width < 768 && (
                    <>
                      <div className={styles.result__imagesContainerBig}>
                        <img
                          src={
                            caseEl?.result?.chinaSecondFirstMobile ||
                            caseEl?.result?.chinaThirdFirstMobile
                          }
                          alt={caseEl?.result?.alt}
                        />
                      </div>
                    </>
                  )}
                  {width >= 768 && width < 1180 && (
                    <>
                      <div className={styles.result__imagesContainerBig}>
                        <img
                          src={
                            caseEl?.result?.chinaSecondFirstTablet ||
                            caseEl?.result?.chinaThirdFirstTablet
                          }
                          alt={caseEl?.result?.alt}
                        />
                      </div>
                    </>
                  )}
                  {width >= 1180 && (
                    <>
                      <div className={styles.result__imagesContainerBig}>
                        <img
                          src={
                            caseEl?.result?.chinaSecondFirstDesktop ||
                            caseEl?.result?.chinaThirdFirstDesktop
                          }
                          alt={caseEl?.result?.alt}
                        />
                      </div>
                    </>
                  )}
                </>
              ))}
            <div className={styles.result__imagesBottom}>
              {caseEl.case === "china" && (
                <>
                  {width >= 320 && width < 768 && (
                    <>
                      <div className={styles.result__imagesContainerSmall}>
                        <img
                          src={caseEl?.result?.cargoResultSecondMobile}
                          alt={caseEl?.result?.alt}
                        />
                      </div>
                      <div className={styles.result__imagesContainerSmall}>
                        <img
                          src={caseEl?.result?.cargoResultThirdMobile}
                          alt={caseEl?.result?.alt}
                        />
                      </div>
                    </>
                  )}
                  {width >= 768 && width < 1180 && (
                    <>
                      <div className={styles.result__imagesContainerSmall}>
                        <img
                          src={caseEl?.result?.cargoResultSecondTablet}
                          alt={caseEl?.result?.alt}
                        />
                      </div>
                      <div className={styles.result__imagesContainerSmall}>
                        <img
                          src={caseEl?.result?.cargoResultThirdTablet}
                          alt={caseEl?.result?.alt}
                        />
                      </div>
                    </>
                  )}
                  {width >= 1180 && (
                    <>
                      <div className={styles.result__imagesContainerSmall}>
                        <img
                          src={caseEl?.result?.cargoResultSecondDesktop}
                          alt={caseEl?.result?.alt}
                        />
                      </div>
                      <div className={styles.result__imagesContainerSmall}>
                        <img
                          src={caseEl?.result?.cargoResultThirdDesktop}
                          alt={caseEl?.result?.alt}
                        />
                      </div>
                    </>
                  )}
                </>
              )}
              {caseEl.case === "china-second" ||
                (caseEl.case === "china-third" && (
                  // <>
                  //   <div className={styles.result__imagesContainerSmall}>
                  //     <img
                  //       src={
                  //         caseEl?.result?.chinaSecondResultSecond?.src ||
                  //         caseEl?.result?.chinaThirdResultSecond?.src
                  //       }
                  //       alt={caseEl?.result?.cargoResultSecond?.alt}
                  //     />
                  //   </div>
                  //   <div className={styles.result__imagesContainerSmall}>
                  //     <img
                  //       src={
                  //         caseEl?.result?.chinaSecondResultThird?.src ||
                  //         caseEl?.result?.chinaThirdResultThird?.src
                  //       }
                  //       alt={caseEl?.result?.cargoResultThird?.alt}
                  //     />
                  //   </div>
                  // </>
                  <>
                    {width >= 320 && width < 768 && (
                      <>
                        <div className={styles.result__imagesContainerSmall}>
                          <img
                            src={
                              caseEl?.result?.chinaSecondSecondMobile ||
                              caseEl?.result?.chinaThirdSecondMobile
                            }
                            alt={caseEl?.result?.alt}
                          />
                        </div>
                        <div className={styles.result__imagesContainerSmall}>
                          <img
                            src={
                              caseEl?.result?.chinaSecondThirdMobile ||
                              caseEl?.result?.chinaThirdThirdMobile
                            }
                            alt={caseEl?.result?.alt}
                          />
                        </div>
                      </>
                    )}
                    {width >= 768 && width < 1180 && (
                      <>
                        <div className={styles.result__imagesContainerSmall}>
                          <img
                            src={
                              caseEl?.result?.chinaSecondSecondTablet ||
                              caseEl?.result?.chinaThirdSecondTablet
                            }
                            alt={caseEl?.result?.alt}
                          />
                        </div>
                        <div className={styles.result__imagesContainerSmall}>
                          <img
                            src={
                              caseEl?.result?.chinaSecondThirdTablet ||
                              caseEl?.result?.chinaThirdThirdTablet
                            }
                            alt={caseEl?.result?.alt}
                          />
                        </div>
                      </>
                    )}
                    {width >= 1180 && (
                      <>
                        <div className={styles.result__imagesContainerSmall}>
                          <img
                            src={
                              caseEl?.result?.chinaSecondSecondDesktop ||
                              caseEl?.result?.chinaThirdSecondDesktop
                            }
                            alt={caseEl?.result?.alt}
                          />
                        </div>
                        <div className={styles.result__imagesContainerSmall}>
                          <img
                            src={
                              caseEl?.result?.chinaSecondThirdDesktop ||
                              caseEl?.result?.chinaThirdThirdDesktop
                            }
                            alt={caseEl?.result?.alt}
                          />
                        </div>
                      </>
                    )}
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
