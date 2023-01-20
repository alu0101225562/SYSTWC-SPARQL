export const charactersQuery = (value) => {
  return `SELECT ?charactersLabel WHERE {
  ?manga wdt:P31 wd:Q21198342;
         rdfs:label ?mangaLabel.
  FILTER((LANG(?mangaLabel)) = "en").
  FILTER(STRSTARTS(?mangaLabel, "${value}"))
  ?manga wdt:P674 ?characters;
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?characters rdfs:label ?charactersLabel.
  }
}`;
};
