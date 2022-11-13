import { Link } from "react-router-dom";
import "./AdvertLsit.css";
import placeholder from "../../../../assets/placeholder.png";
const AdvertsList = ({ adverts }) => {
  return (
    <ul>
      {adverts.length > 0 ? (
        <>
          <div className="adv_containers">
            <div className="adv_list">
              {adverts.map((advert) => (
                <div  key={advert.id} className="grid_tag_container">
                  <Link to={`/adverts/${advert.id}`}>
                    <li className="advert-list">
                      <h3 className="list_adv_h3">{advert.name}</h3>
                      <div className="img_adv_container">
                        <img
                          src={advert.photo || placeholder}
                          alt={`Imagen de ${advert.name}`}
                        ></img>
                      </div>
                      <label>{advert.sale ? "Venta" : "Compra"}</label>
                      <br></br>
                      <label>Precio: {advert.price}</label>
                      <div>
                        {advert.tags?.map((tag, index) => (
                          <span key={index}>
                            <label>{tag}</label>{" "}
                          </span>
                        ))}
                      </div>
                    </li>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <h4>Oops!! no hay anuncios que cocidan</h4>
          <Link to="/adverts/new" className="new-advert">
            Crea uno
          </Link>
        </div>
      )}
    </ul>
  );
};

export default AdvertsList;
