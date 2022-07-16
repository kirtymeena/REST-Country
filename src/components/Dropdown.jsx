import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { DropdownValue } from "../redux/features/countriesSlice";

const Dropdown = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer.isDark);
  const data = useSelector((state) => state.countryReducer.country.map(c=>c.region));
  const removeDupRegion = [...new Set(data)]
  const handleChange = (event) => {
    setSearch(event.target.value);
    dispatch(DropdownValue(event.target.value))
   
    
  };

  useEffect(() => {
  }, [search]);
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-standard-label"
          className={`${theme ? "dark dark-text" : "light"}`}
        >
          Filter by Region
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={search}
          onChange={handleChange}
          label="Region"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {removeDupRegion.map((d) =>(
            <MenuItem value={d} key={d} onChange={handleChange}>{d}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
