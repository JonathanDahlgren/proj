import React from 'react';
import Layout from './layout';
import Navbar from './Navbar';

interface Props {
    compiler: string;
    framework: string;
};

/**
 * Application top level componjent. THis is a good place for
 * future top level components - ErrorBooundary, Provider & Suspense, etc.
 */

 export default function App(props: Props) {
     return (
         <div>
             <h1 style={style}>
                 Hello from {props.compiler} and {props.framework}!
            </h1>;
                <Layout />
                <Navbar />
        </div>
     );
 }

 const centeredContent: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}

const theme: React.CSSProperties = {
    color: 'green'
}

const style = { ...centeredContent, ...theme }

// class App2 extends React.Component<Props> {
//     render() {
//         const { compiler, framework } = this.props
//         return (
//             <h1 style={styles}>Hello from {compiler} and {framework}!</h1>
//         )
//     }
// }