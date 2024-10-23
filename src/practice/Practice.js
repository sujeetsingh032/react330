import React, { Fragment } from 'react';
import ice from '../natureimg/ice.jpg';
const lion = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShH3o9jmL1UmFpBAN9c2hR4Ac66DS9UoU3g&s";

function Practice() {
  return (
    <div>
      <h1>this is a practice page</h1>
      <h2>return must have only single element </h2>
    </div>
  )
}

export function Abc() {
  return (
    <Fragment>
      <h1>Types of import and export</h1>
      <ol>
        <li>default import and export </li>
        <li>name export { } </li>
      </ol>
      <p>one file has one default function</p>
      <h4>image from public folder</h4>
      <img src='birdphoto/kevin-mueller-aeNg4YA41P8-unsplash.jpg' alt='parrot' width={300}></img>
      <span>image from src folder</span>
      <img src={ice} alt=' iceimg' width={300}></img>
      <div>
      <span> image from CDN {<Practice/>}</span>
      <img src={lion} alt='hill' width={300}></img>
      </div>
    </Fragment>
  )
}

export default Practice