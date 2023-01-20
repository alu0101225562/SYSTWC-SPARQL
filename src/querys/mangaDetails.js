export const mangaDetails = (value) => {
  return `SELECT ?author ?mangaLabel ?imagen ?authorLabel ?genreLabel ?date ?characters ?charactersLabel WHERE {
  ?manga wdt:P31 wd:Q21198342;
    rdfs:label ?mangaLabel;
    wdt:P154 ?imagen;
  OPTIONAL { ?manga wdt:P50 ?author. }
  FILTER(STRSTARTS(?mangaLabel, "${value}"))
  FILTER((LANG(?mangaLabel)) = "en")
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?author rdfs:label ?authorLabel.
  }
  OPTIONAL { ?manga wdt:P136 ?genre. }
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?genre rdfs:label ?genreLabel.
  }
  OPTIONAL { ?manga wdt:P577 ?date. }
}
LIMIT 1`;
};
