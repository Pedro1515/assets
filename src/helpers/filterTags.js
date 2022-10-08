import handleSortObjsBy from "./sortObjsBy";
import handleTotalizingObjs from "./totalizingObjs";

export const handleFilterTagsInArticles = (articles) => {
  const tagsArticle = articles.map((article) => article.taxonomy.tags);
  const tagsFlattened = tagsArticle.reduce((acc, item) => acc.concat(item));
  const tagsTotalized = handleTotalizingObjs(tagsFlattened, "text");
  const tagsSorted = handleSortObjsBy(tagsTotalized, "count").reverse();
  const tagsLimit = tagsSorted.slice(0, 10)

  return tagsLimit
};
