import React, { useState } from 'react';
import styled from 'styled-components';

const Tab = styled.div`
  text-transform: uppercase;
  background-color: #8CC53F;
  border-left: 1px solid #006806;
  font-family: monospace;
  color: #000000;
  padding: 16px;
  font-size: 20px;
  position: relative;
  display: inline-block;

  ul {
    display: none;
    position: absolute;
    top: 60px;
    right: 0px;
    background-image: url(../../img/pepperoni-background.png);
    min-width: 160px;
  }

  &:hover {
    background-color: #3e8e41;
    cursor: pointer;

    ul {
      display: block;

      &:active {
        display: block;
      }
    }
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  list-style: none;
  padding: 3px;
  margin: 0;
`;

const DropdownMenuItem = styled.li`
  font-size: 22px;
  font-weight: bolder;
  padding: 12px 16px;
`;

const FilterTab = ({ children, colors, names, weapons }) => {
  // const [ showDropdown, setShowDropdown ] = useState(false);

  // const showDropDown = () => setShowDropdown(!showDropdown);

  const dropdownItems = () => {
    if (children === 'name') {
      return names.map(name => <DropdownMenuItem key={name}>{name}</DropdownMenuItem>)
    } else if (children === 'color') {
      return colors.map(color => <DropdownMenuItem key={color}>{color}</DropdownMenuItem>)
    } else {
      return weapons.map(weapon => <DropdownMenuItem key={weapon}>{weapon}</DropdownMenuItem>)
    }
  }

  return (
    <Tab>
      <p>{children}</p>
      <DropdownMenu className="menu-dropdown">
        {dropdownItems()}
      </DropdownMenu> 
    </Tab>
  );
};

export default FilterTab;