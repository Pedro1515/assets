import Head from "next/head";
import { createContext, useContext } from "react";
import { ArticlesTags } from '../components/articlesTags'
import { Articles } from '../components/articles'
import { handleFilterTagsInArticles } from '../helpers/filterTags'
import { getArticles } from "../api/articles";
import styles from "../styles/Home.module.css";

const HomePageContext = createContext({ articles: [], tags: [] });

function MainHeaderBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}></div>
    </div>
  );
}

function MainTitle() {
  const { tags } = useContext(HomePageContext);
  
  return (
    <div className={styles.mainTitle}>
      <h1>Acumulado Grilla</h1>
      <ArticlesTags tags={tags} />
    </div>
  );
}

function MainSide() {
  const { articles } = useContext(HomePageContext);

  return (
    <div className={styles.mainSide}>
      <section className={styles.mainSection}>
        <Articles articles={articles} />
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

function Home() {
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

export default function HomePage({ articles }) {
  const articles7 = articles.filter((article) => article.subtype === "7");
  const tagsFiltered = handleFilterTagsInArticles(articles7);

  return (
    <HomePageContext.Provider
      value={{ articles: articles7, tags: tagsFiltered }}
    >
      <Home />
    </HomePageContext.Provider>
  );
}

export async function getServerSideProps() {
  const { data } = await getArticles();
  return { props: data };
}
