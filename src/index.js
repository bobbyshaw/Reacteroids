import React from 'react';
import { render } from 'react-dom';
import { Reacteroids } from './Reacteroids';
import style from './style.css';


const element = document.getElementById('asteroids');

if (element) {
  render(<Reacteroids />, document.getElementById('asteroids'));
}

