import React from "react";
import Accordion from "./Accordion";
import "./Accordion.css";

const items = [
    {
        title: "Who am I?",
        content: "My name is Anis Siouda and I am currently studying computer science at the University of Nottingham. I am 21 years of age and I actively enjoy learning new things, especially if they are challenging. It is because of this reason that I particularly enjoy the computer science field, particularly being a software developer or a data scientist."
    },
    {
        title: "What programming languages do I know, and which ones am I planning on learning?",
        content: "I am well versed in both python and C++, as I have studied these two languages extensively at university as well as at home. This ranges from doing projects and creating functioning code that is interactive, all the way to more complex coding for larger projects. I am also in the process of studying Java, Javascript and Typescript as I believe having expertise in these three languages would be very beneficial for both the future as well as for learning any other programming languages."

    },
    {
        title: "What is your goal in life?",
        content: ""

    }

]
function App() {
    return (
        <div>
            <Accordion items = {items} />
            </div>
    );
}


export default App;
export {}