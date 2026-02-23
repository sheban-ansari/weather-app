import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city);
    setCity("");
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name (e.g. Lucknow)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">🔍 Search</button>
    </form>
  );
}

export default SearchBox;