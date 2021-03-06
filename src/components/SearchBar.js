import React from 'react';
    
    const SearchBar = props =>
    <form>
      <div className="form-group">
        <label htmlFor="searchbar">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="searchbar"
          type="text"
          className="form-control border-info"
          placeholder="Search Pupster Images"
          id="searchbar"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-info">
          Search
        </button>
      </div>
    </form>;
   
export default SearchBar;