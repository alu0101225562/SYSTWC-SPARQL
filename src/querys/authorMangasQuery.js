export const authorMangasQuery = (value) => {
  return `SELECT ?imagen ?mangaLabel ?authorLabel WHERE {
  ?manga wdt:P31 wd:Q21198342.
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?manga rdfs:label ?mangaLabel.
  }
  ?manga wdt:P50 ?author.
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?author rdfs:label ?authorLabel.
  }
  ?manga wdt:P154 ?imagen.
  FILTER((LANG(?authorLabel)) = "en").
  FILTER(STRSTARTS(?authorLabel, "${value}")).
}`;
};
