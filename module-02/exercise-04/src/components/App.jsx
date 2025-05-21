import React from "react";

import { COUNTRIES } from "../data/data";

function App() {
  const [country, setCountry] = React.useState("");
  const countriesList = Object.entries(COUNTRIES);

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="">--- Select Country ---</option>
          <optgroup label="Countries">
            {countriesList.map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </optgroup>
        </select>
      </fieldset>

      <p className="country-display">Selected country: {COUNTRIES[country]}</p>

      <button>Submit</button>
    </form>
  );
}

export default App;
