import React from 'react';
import { useState } from 'react'
import GrandParent from './components/grandParent';
import { UserProvider } from './context/UserContext';

function App() {
  const [count, setCount] = useState(0)
  
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Hello, World!</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count of  {count}
        </button>
      </div>

      <UserProvider>
        <GrandParent />
      </UserProvider>

    </div>
  )
}

export default App
