import React from 'react'
import Intructors from './Intructors'

function Header() {
    return (
       <>
       <div className ="newImg">
            <div className="newHeaderTop">
                <h1>Fashion <br/>
                is Freedom
                </h1>
                <button className="headerBtn">Shop now</button>
            </div>
        </div>
        <Intructors/>
       </>
    )
}

export default Header
