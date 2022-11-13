import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { getAdverts } from "../../dataService";

import FilterForm from "../../../Filters/FilterForm";
import AdvertList from "./AdvertLsit";
import "./AdvertsPage.css"
import Layout from "../../layout/Layout";

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [filterAds, setFilterAds] = useState([]);
  useEffect(() => {
    getAdverts()
      .then(setAdverts)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onFilter = (ads) => {
    setFilterAds(ads);
  };

  return (
    <>
    <div className="ad_containers">
    <Layout link={"new"} title={"Listado de Anuncios"}>
      {adverts.length > 0 ? (
        <>
          <FilterForm adverts={adverts} onFilter={onFilter} />
          <div className="advs_container">
            <AdvertList adverts={filterAds} />
          </div>{" "}
        </>
      ) : (
        <>
          <p>Aún no hay anuncios</p>
          <Link to="/adverts/new" className="new-advert">
            Crea uno
          </Link>
        </>
      )}
    </Layout>
    </div>
    </>
  );
};

export default AdvertsPage;
