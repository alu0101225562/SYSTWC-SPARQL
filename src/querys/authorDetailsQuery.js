export const authorDetails = (value) => {
  return `SELECT ?authorLabel ?genderLabel ?cityLabel ?birth WHERE {
  wd:${value} wdt:P31 wd:Q5;
    rdfs:label ?authorLabel;
    wdt:P21 ?gender.
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?gender rdfs:label ?genderLabel.
  }
  wd:${value} wdt:P27 ?city.
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en".
    ?city rdfs:label ?cityLabel.
  }
  
  wd:${value} wdt:P569 ?birth.
  
  FILTER((LANG(?authorLabel)) = "en")
  FILTER((LANG(?genderLabel)) = "en")
  FILTER((LANG(?cityLabel)) = "en")
}
LIMIT 1`;
};
