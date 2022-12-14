import { useEffect, useState } from "react"

const SelectGroup = ({ setState }) => {
  const [value, setValue] = useState([])

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      tags: value,
    }))
  }, [setState, value])

  const handleChange = ({ target }) => {
    const tags = [...target.children]
    const filteredTags = tags
      .filter((option) => option.selected)
      .map((option) => option.value)
    setValue(filteredTags)
  }

  return (
    <label className="ad_name , select_custom">
      Tags{" "}
      <select
        name="tags"
        value={value}
        multiple={true}
        onChange={handleChange}
        required
      >
        <option value="lifestyle">Lifestyle</option>
        <option value="mobile">Mobile</option>
        <option value="motor">Motor</option>
        <option value="work">Work</option>
      </select>
    </label>
  )
}

export default SelectGroup
