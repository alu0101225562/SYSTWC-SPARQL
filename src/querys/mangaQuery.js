export const mangaQuery = (value) => {
  return `SELECT ?manga ?mangaLabel ?imagen WHERE {
  ?manga wdt:P31 wd:Q21198342;
         rdfs:label ?mangaLabel.
  FILTER(LANG(?mangaLabel) = "en").
  FILTER(STRSTARTS(?mangaLabel, "${value}")).
  ?manga wdt:P154 ?imagen .
}
LIMIT 1000`;
};
