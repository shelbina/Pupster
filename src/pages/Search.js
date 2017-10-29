import React from "react";
import SearchBar from "../components/SearchBar.js"

// class search extends component {
//   state = {
//     search:"",
//     result:{}
//   };

const Search = () =>
  <div>
    <h1>Dog Search</h1>
    {/* This page allows you to search the [Dog Ceo API](https://dog.ceo/dog-api/) for all dogs by breed. 
    After a search is made, 
    a list of all of the results appears underneath. */}
    <p>
      Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
      gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
      Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
      fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
      euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p>

    <SearchBar />
  </div>;

export default Search;