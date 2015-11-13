import React from 'react';

// stateless HeaderInput Component
export const HeaderInput = (props) =>
 <div className="headerinput">Movie Releases <input type="month" onChange={(event)=>props.changeFunction(event.target.value)}></input></div>;
