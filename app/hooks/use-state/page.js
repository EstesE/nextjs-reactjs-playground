"use client";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useState } from "react";
import styles from "../../page.module.css";

function countInitial() {
    console.log( "run function" );
    return 0;
}

const UseState = () => {
    // Gets called everytime we render out component
    // const [count, setCount] = useState(0);
    // const [count, setCount] = useState(countInitial());

    // Function version gets called only the first time the component renders
    // const [count, setCount] = useState(() => countInitial());
    // const [count, setCount] = useState(() => {
    //   console.log('blah');
    //   return 0;
    // });

    // Using objects...or we could useState on each prop (count and theme)
    const [state, setState] = useState( { count: 0, theme: "blue" } );
    const count = state.count;
    const theme = state.theme;

    function decrementCount() {
    // setCount(prevCount => prevCount - 1);

        // When using object spread previous state
        setState( prevState => {
            return { ...prevState, count: prevState.count - 1 };
        } );
    }

    function incrementCount() {
    // setCount(prevCount => prevCount + 1);

        // When using object spread previous state
        setState( prevState => {
            return { ...prevState, count: prevState.count + 1 };
        } );
    }

    return (
        <main className={styles.main}>
            <div className={styles.description} style={{ placeContent: "center" }}>
                <p>
                    <Button variant='outlined' onClick={decrementCount}>-</Button>
                    <Card variant="outlined">{count} - {theme}</Card>
                    <Button variant='outlined' onClick={incrementCount}>+</Button>
                </p>
            </div>
        </main>
    );
};

export default UseState;