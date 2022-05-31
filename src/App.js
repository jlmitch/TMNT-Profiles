import React, { useState, useEffect } from 'react';
import Navbar from './layouts/navbar/NavBar';
import styled from 'styled-components';

const Content = styled.div`

`;

const App = () => {
  const [ turtles, setTurtles ] = useState([]);
  // const [turtles, setTurtles] = useState([]);

  const fetchTurtles = () => {
    fetch('./tmnt.json', {
      headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    }).then((response) => response.text()).then(text => setTurtles(JSON.parse(text).turtles)).catch(error => console.log(error));
  }

  useEffect(() => {
    fetchTurtles();
  }, []);

  return (
    <div className="App">
      <Navbar turtles={turtles} />
      <Content>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </Content>
    </div>
  );
}

export default App;
