import React from 'react'
import Intructors from './Intructors'

function Header() {
    return (
       <>
       <div className ="newImg">
            <div className="newHeaderTop">
                <h1>Keeping yourself fit<br/>
                Gives good health
                </h1>
                <button className="headerBtn">Contact US</button>
            </div>
        </div>
        <Intructors/>
       </>
    )
}

export default Header
