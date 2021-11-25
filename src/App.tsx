import React from 'react'
import Nav from 'components/Nav/Nav'
import Home from 'pages/Home/Home'
import { GlobalStorage } from 'GlobalContext'

function App() {
    return (
        <GlobalStorage>
            <Nav></Nav>
            <Home></Home>
        </GlobalStorage>
    )
}

export default App
