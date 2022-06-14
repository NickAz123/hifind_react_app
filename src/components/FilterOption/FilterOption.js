import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./FilterOption.scss";

function FilterOption({ id, name, color }) {
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const styles = {
    background: `${bgColor}`,
  };

  const selectFilter = (e, filterId) => {
    console.log("something happened", e.target.checked);
    console.log("id", filterId);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="option"
      style={styles}
      onMouseEnter={() => setBgColor(`${color}65`)}
      onMouseLeave={() => setBgColor("#FFFFFF")}
    >
      <Checkbox
        onClick={(e) => selectFilter(e, id)}
        size="small"
        sx={{
          "&.Mui-checked": {
            color: color,
          },
        }}
      />
      <span>{name}</span>
    </div>
  );
}

export default FilterOption;
