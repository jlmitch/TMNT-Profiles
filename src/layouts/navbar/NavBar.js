import React from 'react';
import NavWrap from './NavWrap';
import FilterTab from './FilterTab'

const Navbar = ({ turtles }) => {
  // const [ showDropdown, setShowDropdown ] = useState(false);

  const turtleNames = turtles.map(turtle => turtle.name);
  const turtleWeapons = turtles.map(turtle => turtle.weapon);
  const turtleColors = turtles.map(turtle => turtle.color);

  const tabs = ['name', 'color', 'weapon'];
  // const handleMouseEnter = () => setShowDropdown(!showDropdown);

  return (
    <NavWrap>
      {tabs.map(tab => <FilterTab key={tab} names={turtleNames} weapons={turtleWeapons} colors={turtleColors}>{tab}</FilterTab>)}
    </NavWrap>
  );
}

export default Navbar;