// import { useState, useEffect }
import { useInput } from "./hooks"

const InputPrice = ({ setState, name }) => {
  const [value, handleChange] = useInput(setState, name)

  return (
    <>
      <label className="ad_name">
        Precio{" "}
        <input
          className="precio_ad"
          required
          type="number"
          name={name}
          onChange={handleChange}
          value={value}
          min="0"
        />
      </label>
    </>
  )
}

export default InputPrice
