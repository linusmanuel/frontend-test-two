const FilterBar = () => {
  return (
    <form action="#">
      <input 
        type="search"
        placeholder="Filter by title, companies, expertise"  
      />
      <input 
        type="search"
        placeholder="Filter by location"  
      />
      <label>
        <input 
          type="checkbox"
          placeholder="Filter by location"  
        /> Full Time only
      </label>
      <button>Search</button>
    </form>
  )
}

export default FilterBar