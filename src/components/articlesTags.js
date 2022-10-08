import styles from "../styles/Home.module.css";

export function ArticlesTags({ tags }) {
  console.log(tags);

  return tags.map((tag) => (
    <a className={styles.articleTag} key={tag.slug} href={`/tema/${tag.slug}`}>
      {tag.text}{" "}
    </a>
  ));
}
