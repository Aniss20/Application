import React, { useState } from "react";

interface Item {
    title: string;
    content: string;
}

interface AccordionPros {
    items: Item[];
}

function Accordion({items} : AccordionPros) {
    const[acitveIndex, setActiveIndex] = useState(-1);
    const handleClick = (index: number) => {
        setActiveIndex(index === acitveIndex ? -1 : index);
    };
    return (
      <div>
         {items.map((item, index) => (
            <div key={item.title}>
               <button onClick={() =>handleClick(index)}>{item.title}</button>
               {index === acitveIndex && <p>{item.content}</p>}
            </div>
         ))}
      </div>
   );
}
export default Accordion;
export {}
