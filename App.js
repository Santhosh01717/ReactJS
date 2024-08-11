import React from "react";
import ReactDOM from "react-dom/client"


const NewComponent = () => (
     <div>This is new Component</div>
)
const heading = (
    <div>
    <h1>This is React Element</h1>
    <NewComponent />
    </div>
)
const HeadingComponent = () =>(
    <div>
    <h1>This is React Functional Component</h1>
    {heading}
    </div>
    )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);