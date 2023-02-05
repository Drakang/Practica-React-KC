import { useState } from "react";
import InputTitle from "./InputTitle";
import InputType from "./InputType";
import InputPrice from "./InputPrice";
import InputFile from "./InputFile";
import SelectGroup from "./SelectTags";
import { createAdvert } from "../../dataService";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const [globalState, setGlobalState] = useState({
    name: "",
    sale: true,
    tags: [],
    price: "",
    photo: null,
  });

  const navigate = useNavigate();

  const handlefileChange = (event) => {
    setGlobalState({
      ...globalState,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = globalState;
    console.log(data);

    try {
      const { id } = await createAdvert(data);
      navigate(`/adverts/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="form_ad_new" onSubmit={handleSubmit}>
        <InputTitle name="name" setState={setGlobalState} />
        <br />
        <InputType setState={setGlobalState} />
        <br />
        <InputPrice name="price" setState={setGlobalState} />
        <br />
        <SelectGroup setState={setGlobalState} />
        <br />
        <InputFile onChange={handlefileChange} />
        <br />
        <br />
        <button className="button_new" type="submit">
          Crear Anuncio
        </button>
      </form>
    </>
  );
};

export default CreateForm;
