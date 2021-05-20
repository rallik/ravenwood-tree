import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Social from './Social';


const layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Nav />
            {children}
            <Social />
        </React.Fragment>
    )
}

export default layout
