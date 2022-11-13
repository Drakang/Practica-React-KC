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
    navigate("/", { replace: true });
  };

  return (
    <div className="adv_container">
      <Layout title={advert.name}>
        <div className="img_container">
          <img
            src={advert.photo || placeholder}
            alt={`Imagen de ${advert.name}`}
          />
        </div>
        <br />
        <div className="text_container">
          <span>Estado:{advert.sale ? "Venta" : "Compra"}</span>
          <p>Precio: {advert.price}€</p>
          <div>
            Publicado en:
            <time className="">
              {new Date(advert.createdAt).getFullYear()}-
              {new Date(advert.createdAt).getMonth() + 1}-
              {new Date(advert.createdAt).getDate()}
            </time>
          </div>
          <div className="tag_container">
            Filtro:
            {advert.tags?.map((tag, index) => (
              <span key={index}>
                <span> {tag}</span>
              </span>
            ))}
          </div>
        </div>
        <DeleteAdButton onDelete={onDelete} />
      </Layout>
    </div>
  );
};

export default AdvertPage;
