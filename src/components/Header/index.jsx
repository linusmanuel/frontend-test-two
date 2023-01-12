import styled from "styled-components"
import FilterBar from "../FilterBar"

const Header = () => {
  return (
    <header>
      <div>
        <h1>devjobs</h1>
        <button>Theme</button>
      </div>
      <FilterBar />
    </header>
  )
}

export default Header