import { useEffect, useState } from "react";
import { getTags } from "../../dataService";

const SelectGroup = ({ setState }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags()
      .then(setTags)
      .catch((error) => {
        console.log(error.status);
      });
  }, []);

  const handleChange = ({ target }) => {
    const tags = [...target.children];
    const filteredTags = tags
      .filter((option) => option.selected)
      .map((option) => option.value);
    setState((prev)=>({
      ...prev,
      tags: filteredTags
     }))
  };

  return (
    <label className="ad_name , select_custom">
      Tags
      <select
        name="tags"
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
