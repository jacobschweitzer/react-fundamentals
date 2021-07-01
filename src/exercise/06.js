// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const [error, setError] = React.useState('')

  function handleSubmit(event){
    event.preventDefault();
    onSubmitUsername( username );
  }

  function handleChange(event){
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    if ( ! isLowerCase ) {
      setError('Username must be lower case')
    } else { 
      setError(null)
    }
    setUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleChange} />
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
