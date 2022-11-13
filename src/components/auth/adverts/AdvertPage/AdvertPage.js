import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAdvert, deleteAdverts } from "../../dataService";

import placeholder from "../../../../assets/placeholder.png";
import DeleteAdButton from "./DeleteAdButton";
import Layout from "../../layout/Layout";

import "./AdvertPage.css";

const AdvertPage = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAdvert(id)
      .then(setAdvert)
      .catch((error) => {
        console.log(error.status);
        navigate("/notFound", { replace: true });
      });
  }, [id, navigate]);

  const onDelete = () => {
    deleteAdverts(id);
    navigate("/", {replace: true });
  };

  return (
    <Layout title={advert.name}>
      <div className="adv_container">
        <div className="img_container">
          <img
            src={advert.photo || placeholder}
            alt={`Imagen de ${advert.name}`}
          />
        </div>
        <br />
        <label>{advert.sale ? "Venta" : "Compra"}</label>
        <p>Precio: {advert.price}</p>
        <p>Publicado en:
          <time className="">
            {new Date(advert.createdAt).getFullYear()}-
            {new Date(advert.createdAt).getMonth() + 1}-
            {new Date(advert.createdAt).getDate()}
          </time>
        </p>
        <div>
          {advert.tags?.map((tag, index) => (
            <span key={index}>
              <small>{tag}</small>
              <br />
            </span>
          ))}
        </div>
        <DeleteAdButton onDelete={onDelete} />
      </div>
    </Layout>
  );
};

export default AdvertPage;
