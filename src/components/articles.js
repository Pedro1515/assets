import handleFormatDate from "../helpers/formatDate";
import styles from "../styles/Home.module.css";

function Article({ article }) {
  const {
    display_date,
    headlines,
    promo_items: { basic: imagePromoItems },
  } = article;

  const formattedDate = handleFormatDate(display_date);

  return (
    <article style={{ width: "280px" }}>
      <picture>
        <img
          className={styles.imageActicle}
          alt={imagePromoItems.subtitle}
          src={imagePromoItems.url}
        />
      </picture>
      <h3>{headlines.basic}</h3>
      <p>{formattedDate}</p>
    </article>
  );
}

export function Articles({ articles }) {
  return articles.map((article) => (
    <Article key={article._id} article={article} />
  ));
}
