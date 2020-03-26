import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const App = props => {
    return (
        <div
            style={{ width: '100px', height: '300px', backgroundColor: 'red' }}
        >
            <h1>Thtis is a b</h1>
            <pre>{JSON.stringify(props.state, null, 2)}</pre>
            <div className="app"></div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
