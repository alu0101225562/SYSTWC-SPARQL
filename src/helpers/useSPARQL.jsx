import { useEffect, useState } from "react";

const useSPARQL = (sparqlQuery) => {
  const [res, setRes] = useState([]);

  const endpointUrl = "https://query.wikidata.org/sparql";

  const fullUrl = endpointUrl + "?query=" + encodeURIComponent(sparqlQuery);
  const headers = { Accept: "application/sparql-results+json" };

  useEffect(() => {
    fetch(fullUrl, { headers })
      .then((body) => body.json())
      .then((res) => setRes(res.results?.bindings))
      .catch((err) => console.error(err));
  }, [sparqlQuery]);

  useEffect(() => {
    console.log(res);
  }, [res]);

  return { res };
};

export default useSPARQL;
