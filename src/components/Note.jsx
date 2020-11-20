import React from 'react';

let pi = "3.1415";

function singlePi() {
  return pi;
}

function doublePi() {
  return Math.pow(pi,2);
}

function tripplePi() {
  return Math.pow(pi,3);
}

export default singlePi;
export {doublePi, tripplePi};