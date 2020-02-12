import React, { CSSProperties } from 'react';

/** React function component */
export default function Layout() {

    return (
        <div style={Navbar}>
            <h1 style={NavbarItem}>React Playground</h1>
        </div>
    )
};

const Navbar: CSSProperties = {
    height: '4em',
    background: 'black',
    color: '#E1E1E1',
    display: 'flex',
    alignItems: 'stretch',
    padding: '0.1em'
};

const NavbarItem: CSSProperties = {
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
};

