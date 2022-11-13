import { useInput } from "./hooks"

const InputTitle = ({ setState, name }) => {
  const [value, handleChange] = useInput(setState, name)

  return (
    <label className="ad_name">
      Título del anuncio{"  "}
      <input
        className="nombre_ad"
        autoFocus
        required
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </label>
  )
}

export default InputTitle
