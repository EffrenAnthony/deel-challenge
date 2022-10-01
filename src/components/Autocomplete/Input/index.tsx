import React from "react";
import "./Input.css";

interface InputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ query, setQuery }: InputProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div className="input">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="input__field"
        placeholder="Find an API here"
      />
    </div>
  );
};

export default Input;
