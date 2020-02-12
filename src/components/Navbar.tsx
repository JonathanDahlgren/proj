import React, { CSSProperties } from 'react';

/** React function component */
export default function Navbar() {

    return (
        <div style={styleNavbar}>
            <h1>React Playground</h1>
        </div>
    )
};

const styleNavbar: CSSProperties = {
    color: "white",
    backgroundColor: "black",
    justifyContent: "center",
    alignContent: "center",
    padding: "1rem"
}