import React from "react";



function Filter({sortBy, setSortBy, filterBy, setFilterBy}) {

   function handleSortChange(event){
      setSortBy(event.target.value)
    }

    function handleFilterChange(event){
      setFilterBy(event.target.value)
    }

 return (   
   
   <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Carat Weight"
          name="sort"
          checked={sortBy === "Carat Weight"}
          onChange={handleSortChange}
        />
        Carat Weight
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price"}
          onChange={handleSortChange}
        />
        Price
      </label>

      <br />

      <label>
        <strong>Filter By Shape:</strong>
        <select value={filterBy} onChange= {handleFilterChange} >
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>



 )
}

export default Filter;