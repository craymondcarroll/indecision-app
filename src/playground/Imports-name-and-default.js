import validator from 'validator';
import React from 'react';
import ReactDom from 'react-dom';

import {square} from "./utils";
import isSenior, {isAdult,canDrink} from "./person";

console.log("app.js is running!");
console.log(square(3));
console.log("Can I Drink at 17 " + canDrink(17));
console.log("Am I an adult at 50  " + isAdult(50));
console.log("Am I a Senior at 70 " + isSenior(70));


console.log(validator.isEmail("test@gmail.com"));
