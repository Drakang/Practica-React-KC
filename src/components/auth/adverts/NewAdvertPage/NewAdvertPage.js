import { useNavigate } from "react-router";
import Layout from "../../layout/Layout";
import CreateForm from "./CreateForm";
import "../AdvertPage/AdvertPage.css"
const NewAdvertPage = () => {
  const navigate = useNavigate();
  const onSubmit = (id) => {
    navigate(`/adverts/${id}`);
  };

  return (
    <div className="adv_container">
      <div className="nav_ba">
      <Layout title={"Crear Nuevo Anuncio"}>
        <CreateForm onSubmit={onSubmit} />
      </Layout>
      </div>
    </div>
  );
};

export default NewAdvertPage;
