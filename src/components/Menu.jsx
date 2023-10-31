import { useState } from "react";

function Menu({ value, onMenuChange }) {
  const [country, setCountry] = useState("something"); //flag?
  return (
    <>
      <select
        className="menu form-select"
        aria-label="Default select example"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="canada">Canada</option>
        <option value="usa">United States</option>
        <option value="mexico">Mexico</option>
      </select>
    </>
  );
}

export default Menu;
