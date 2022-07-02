import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./FilterOption.scss";

function FilterOption({ id, name, color, handleFilter, category }) {
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [checked, setChecked] = useState(false);

  const styles = {
    background: `${bgColor}`,
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      className="option"
      style={styles}
      onMouseEnter={() => setBgColor(`${color}65`)}
      onMouseLeave={() => setBgColor("#FFFFFF")}
      onClick={() => {
        handleFilter(id, category);
        setChecked(checked ? false : true);
      }}
    >
      <Checkbox
        // onClick={() => handleFilter(id, category)}
        checked={checked}
        size="small"
        sx={{
          "&.Mui-checked": {
            color: color,
          },
          "& .MuiSvgIcon-root": { fontSize: 16 },
        }}
      />
      <span>{name}</span>
    </button>
  );
}

export default FilterOption;
