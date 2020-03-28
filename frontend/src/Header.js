import React from 'react'

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <h1>{props.children}</h1>
        </header>
    )
}

/* 

    disrupting

    function Header( {title, children} ) {
    return (
        <header>
            <h1>{title}</h1>
            <h1>{children}</h1>
        </header>
    )
}   

*/

export default Header

/* 

export default Header() {
    return (
        <header>
            <h1>Be The Hero</h1>
        </header>
    )
}

*/