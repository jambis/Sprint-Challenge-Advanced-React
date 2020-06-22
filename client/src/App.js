import React from "react";
import Switch from "@material-ui/core/Switch";
import Display from "./Components/Display";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useDarkMode } from "./hooks/useDarkMode";
import { useSelect } from "./hooks/useSelect";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [value, handleChange] = useSelect("Player");
  const toggleMode = e => {
    setDarkMode(!darkMode);
  };

  console.log(darkMode);

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <div className="header">
        <h1>Women's World Cup - Google Trends</h1>
        <Switch
          className="switch"
          checked={darkMode}
          onChange={toggleMode}
          value="checkedB"
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <InputLabel htmlFor="filter-simple">Filter</InputLabel>
        <Select
          style={{ minWidth: 120 }}
          value={value}
          onChange={handleChange}
          inputProps={{
            name: "Filter",
            id: "filter-simple"
          }}
        >
          <MenuItem value={"Player"}>Player</MenuItem>
          <MenuItem value={"Country"}>Country</MenuItem>
        </Select>
      </div>
      <Display filter={value} />
    </div>
  );
};

export default App;
