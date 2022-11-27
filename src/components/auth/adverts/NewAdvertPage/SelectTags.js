import { useEffect, useState } from "react";
import { getTags } from "../../dataService";

const SelectGroup = ({ setState }) => {
  const [value, setValue] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags()
      .then(setTags)
      .catch((error) => {
        console.log(error.status);
      });
  }, []);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      tags: value,
    }));
  }, [setState, value]);

  const handleChange = ({ target }) => {
    const tags = [...target.children];
    const filteredTags = tags
      .filter((option) => option.selected)
      .map((option) => option.value);
    setValue(filteredTags);
  };

  return (
    <label className="ad_name , select_custom">
      Tags
      <select
        name="tags"
        value={value}
        multiple={true}
        onChange={handleChange}
        required
      >
        {tags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectGroup;
