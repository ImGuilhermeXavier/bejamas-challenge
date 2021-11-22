import React, { useEffect } from 'react'
import logo from './logo.svg'
import useToast from 'hooks/useToast'

function App() {
    const toast = useToast()
    useEffect(() => {
        toast.success('bom diaaaaaaaaaa dsa d asd sa d sa dsa dsa')
    }, [toast])
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
