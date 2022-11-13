import { useEffect, useState } from "react";

const InputType = ({ setState }) => {
  const [value, setValue] = useState(true);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      sale: value,
    }));
  }, [setState, value]);

  const handleChange = ({ target }) => {
    setValue(target.value === "true");
  };

  return (
    <>
      <label className="ad_name">Tipo de anuncio: </label>
      <label className="ad_name">
        Venta
        <input
          className="venta_ad"
          type="radio"
          name="sale"
          checked={value === true}
          required
          value={true}
          onChange={handleChange}
        />
      </label>
      <label className="ad_name">
        Compra
        <input
          className="compra_ad"
          type="radio"
          name="sale"
          value={false}
          checked={value === false}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default InputType;
