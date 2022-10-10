import { useContext } from "react";
import { HomePageContext } from "../pages";
import styles from "../styles/Home.module.css";

export function ArticlesTags() {
  const { tags } = useContext(HomePageContext);
  console.log(tags);

  return tags.map((tag) => (
    <a className={styles.articleTag} key={tag.slug} href={`/tema/${tag.slug}`}>
      {tag.text}{" "}
    </a>
  ));
}
