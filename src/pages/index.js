import Head from "next/head";
import { createContext } from "react";
import { ArticlesTags } from "./articlesTags";
import { Articles } from "./articles";
import { handleFilterTagsInArticles } from "../helpers/filterTags";
import { getArticles } from "../api/articles";
import styles from "../styles/Home.module.css";

export const HomePageContext = createContext({ articles: [], tags: [] });

function MainHeaderBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}></div>
    </div>
  );
}

function MainTitle() {
  return (
    <div className={styles.mainTitle}>
      <h1>Acumulado Grilla</h1>
      <ArticlesTags />
    </div>
  );
}

function MainSide() {
  return (
    <div className={styles.mainSide}>
      <section className={styles.mainSection}>
        <Articles />
      </section>
      <div className={styles.mainSideAds}></div>
    </div>
  );
}

function HomeHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LA NACION</div>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <Head>
        <title>Assets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader />
      <main className={styles.main}>
        <MainHeaderBanner />
        <MainTitle />
        <MainSide />
      </main>
    </>
  );
}

export default function HomePageWithContext({ articles }) {
  const articles7 = articles.filter((article) => article.subtype === "7");
  const tagsFiltered = handleFilterTagsInArticles(articles7);

  return (
    <HomePageContext.Provider
      value={{ articles: articles7, tags: tagsFiltered }}
    >
      <HomePage />
    </HomePageContext.Provider>
  );
}

export async function getServerSideProps() {
  const { data } = await getArticles();
  return { props: data };
}
