import React from "react";
import ReactDOM from "react-dom";


const day =new Date();
const time = day.getHours();

let greeting;
const h = {
    color : "red"

}

if (time < 12){
    greeting = "Good morning";
    h.color = "red";
}
else if(time < 18){
    greeting = "Good evening";
    h.color = "green";
}
else{
    greeting = "Good night";
    h.color = "blue";


}

ReactDOM.render(<h1 className="heading" style={h}>{greeting}</h1>, document.getElementById("root"));
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
