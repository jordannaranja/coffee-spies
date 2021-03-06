  
import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";

const Button = styled.div`
  position: absolute;
  top:26px;
  left:26px;
  width:24px;
  height:24px;
  cursor: pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  & > img {
    width: 24px;
    height: 20.58px;
  }
  .iconpath path{
    stroke: #FF7750;
  }    &:hover {
    transform: scale(1.2); 
    transition: 0.2s; 
}
`;


const Cancel = () => {

  return <Link to="/">
    <Button >
      <img src={} />
    </Button>
  </Link>
}




export default Cancel;