import React from "react";
import { duck } from "./demo";


interface Props {
    duck: duck;
}

export default function DuckItem(props: Props) {
    return (
        < div>
            <span>{props.duck.name}</span>
            <button onClick={() => props.duck.makeSound(props.duck.name + ' quack')}>make sound</button>
          </div >
    )
}