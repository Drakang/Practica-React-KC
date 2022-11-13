import { useState } from "react"
import InputTitle from "./InputTitle"
import InputType from "./InputType"
import InputPrice from "./InputPrice"
import InputFile from "./InputFile"
import SelectGroup from "./SelectTags"
import { createAdvert } from "../../dataService"

const CreateForm = ({ onSubmit }) => {
  const [globalState, setGlobalState] = useState({
    name: "",
    sale: true,
    price: 0,
    photo: "",
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    console.log(data)

    try {
      /* const { id } = await createAdvert(data) */
      const {id} = await createAdvert(data)
      onSubmit(id)
    } catch (error) {
      console.error(error)
    }
  }

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
        <InputFile setState={setGlobalState} />
        <br />
        <br />
        <button className="button_new" type="submit">Crear Anuncio</button>
      </form>
    </>
  )
}

export default CreateForm
