import {createGlobalStyle} from 'styled-components'

export const EstiloGlobal = createGlobalStyle`


 

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
}

body {
    background-color: rgb(238, 238, 238);
    font: 400 14px arial, sans-serif;
        
}

button {
    background-color: rgb(26, 40, 168);
    color: white;
}

form, input {
    background-color: rgba(255, 255, 255, 0.952);
    
}

button {
    cursor: pointer;
 }
 
 form input {
    width: 100%;
    height: 40px;
    color: darkblue;
    border: 1px solid black;
    border-radius: 8px;
    padding: 0 24px;
    margin-top: 10px;
 }
 
 .button {
   width: 30%;
   height: 40px;
   background-color: rgb(26, 40, 168);
   border: 1px solid gray;
   border-radius: 8px;
   color: white;
   font-weight: 700;
   margin-top: 20px;
   display: inline-block;
   text-align: center;
   text-decoration: none;
   font-size: 18px;
   line-height: 40px;
   filter: filter 0.3s;
 
   &:hover {
     filter: brightness(90%);
   }
 }
` 