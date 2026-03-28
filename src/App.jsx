import { useState } from 'react'
import './index.css'

/*
  This is the main component of your React application.
  Every React app starts with at least one component like this.
*/

function App() {
  
  // 1. useState is a React Hook that lets you add state to your component
  //    - count: the current value (starts at 0)
  //    - setCount: function used to update the count
  //    React will automatically re-render the component when count changes
  const [count, setCount] = useState(0)

  // 2. This is the JSX (JavaScript XML) returned by the component
  //    JSX looks like HTML but is actually JavaScript
  return (
    <div className="App">
      
      <h1>Hello World! 👋</h1>

      <p>
        This is a simple Vite + React starter for your assignment.<br />
        Deploy it to Render.com when you're done!
      </p>

      <div style={{ marginTop: '40px' }}>
        
        <p style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
          You clicked <strong>{count}</strong> times
        </p>

        {/* 
          3. Event Handling in React
          - We use onClick instead of onclick (camelCase)
          - When the button is clicked, we call setCount() to update state
          - Arrow function: () => setCount(count + 1)
        */}
        <button onClick={() => setCount(count + 1)}>
          Click me!
        </button>
      </div>

      <p style={{ marginTop: '60px', fontSize: '1rem', color: '#888' }}>
        Edit <code>src/App.jsx</code> and see your changes live.<br />
        Then push to GitHub → it will auto-deploy on Render.com
      </p>

    </div>
  )
}

// 4. Export the component so it can be used in other files (like main.jsx)
export default App
