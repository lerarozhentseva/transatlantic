import styles from "./values.module.css";

const Values = () => {
  return (
    <section className={styles.values}>
      <div className={styles.values__container}>
        <div className={styles.values__left}>
          <h3 className={styles.values__title}>Наши ценности</h3>
        </div>
        <div className={styles.values__right}>
          <div className={styles.values__cards}>
            <div className={styles.values__card}>
              <ul className={styles.values__list}>
                <li className={styles.values__item}>
                  <h4 className={styles.values__heading}>
                    Доверие наших клиентов
                  </h4>
                  <p className={styles.values__text}>
                    Кто пришел к нам однажды — остается с нами навсегда.
                  </p>
                  <p className={styles.values__text}>
                    Работаем с 2016 года. Головной офис находится
                    в Екатеринбурге — одном из крупнейших транспортных узлов
                    России. У нас уже есть филиал в Москве, а в ближайших планах
                    открыть офисы во Владивостоке и Новосибирске.
                  </p>
                </li>
                <li className={styles.values__item}>
                  <h4 className={styles.values__heading}>Знания и опыт</h4>
                  <p className={styles.values__text}>
                    Мы — эксперты в нашем деле. Тем не менее, постоянно проходим
                    тренинги и обучения в своей области и не только.
                  </p>
                  <p className={styles.values__text}>
                    Можете быть уверены, мы предложим лучший вариант.
                  </p>
                </li>
                <li className={styles.values__item}>
                  <h4 className={styles.values__heading}>Мир без границ</h4>
                  <p className={styles.values__text}>
                    Мы стираем границы расстояний и достойно преодолеваем
                    препятствия на своем пути. Наша команда установит контакты
                    со всеми участниками процесса перевозки.
                  </p>
                  <p className={styles.values__text}>
                    Соединяем континенты, чтобы доставить ваш груз в сохранности
                    и точно в срок.
                  </p>
                </li>
                <li className={styles.values__item}>
                  <h4 className={styles.values__heading}>Больше свободы</h4>
                  <p className={styles.values__text}>
                    Работая с нами, вы сможете полностью делегировать процесс
                    грузоперевозки от и до. Это позволит вам снять с себя
                    большой объем нагрузки, а освободившиеся силы и время
                    направить на новое развитие вашего бизнеса или посвятить
                    его семье.
                  </p>
                </li>
                <li className={styles.values__item}>
                  <h4 className={styles.values__heading}>Наша команда</h4>
                  <p className={styles.values__text}>
                    В своей работе наши сотрудники руководствуются принципами
                    одной большой семьи — каждый из нас знает, что мы вместе,
                    и никто не останется один в сложной ситуации.
                  </p>
                </li>
                <li className={styles.values__item}>
                  <h4 className={styles.values__heading}>
                    Больше, чем работа.
                  </h4>
                  <p className={styles.values__text}>
                    Завтра мы хотим быть лучше, чем вчера. И это касается каждой
                    сферы жизни, где все сотрудники нашей компании стремятся
                    вверх и чувствуют поддержку за спиной.
                  </p>
                  <p className={styles.values__text}>
                    Именно включённость и усилия каждого двигают ТрансАтлантик
                    вперёд и позволяют осуществлять как личные цели каждого
                    члена команды, так и стратегические задачи всей компании.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
