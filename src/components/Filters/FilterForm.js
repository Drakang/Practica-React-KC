import NameFilter from "./inputTextField";
import PriceFilter from "./inputNumberGroup";
import TagFilter from "./checkboxGroup";
import TypeFilter from "./radioGroup";

import { FilterContextProvider } from "./filterContext";
import { useEffect, useState } from "react";
import { useFilter } from "./Filter";
import "./FilterForm.css";

const FilterForm = ({ adverts, onFilter }) => {
  const INITIAL_STATE = {
    name: "",
    range: { minVal: "", maxVal: "" },
    tags: { lifestyle: false, mobile: false, motor: false, work: false },
    type: "All",
  };
  const [filterParams, setFilterParams] = useState(INITIAL_STATE);
  const [filterAds, setFilterAds] = useState(useFilter(adverts, filterParams));

  const filter = useFilter;
  useEffect(() => {
    setFilterAds(filter(adverts, filterParams));
  }, [filter, adverts, filterParams]);

  useEffect(() => {
    onFilter(filterAds);
  }, [onFilter, filterAds]);

  const handleSubmit = (event) => {
    event.preventDeffault();
  };

  return (
    <div className="form_container">
      <div className="form_inside">
        <FilterContextProvider value={{ filterParams, setFilterParams }}>
          <form onSubmit={handleSubmit}>
            <NameFilter />
            <TypeFilter />
            <PriceFilter />
            <TagFilter />
          </form>
        </FilterContextProvider>
      </div>
    </div>
  );
};

export default FilterForm;
