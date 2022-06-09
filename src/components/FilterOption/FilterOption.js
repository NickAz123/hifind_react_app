import React, { useEffect, useState } from "react";
import "./FilterOption.scss";

function FilterOption({ id, name, color }) {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="option">{name}</div>;
}

export default FilterOption;
