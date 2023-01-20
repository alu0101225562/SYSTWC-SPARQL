export const authorQuery = (value) => {
  return `SELECT ?authorLabel ?author WHERE {
  ?manga wdt:P31 wd:Q21198342;
         rdfs:label ?mangaLabel.
  FILTER(LANG(?mangaLabel) = "en").
  ?manga wdt:P154 ?imagen .
  ?manga wdt:P50 ?author.
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?author rdfs:label ?authorLabel.
  }
  FILTER((LANG(?authorLabel)) = "en").
  FILTER(STRSTARTS(?authorLabel, "${value}")).
}
LIMIT 20`;
};
