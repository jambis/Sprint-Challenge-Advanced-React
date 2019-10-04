import { useState } from "react";

export const useSelect = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return [value, handleChange];
};
