// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box(props) {
  return <div className={"box box--" + props.boxSize} style={{backgroundColor: props.boxColor}}>{props.boxText}</div>
}

function App() {
  return (
    <div>
      <Box boxSize="small" boxColor="lightblue" boxText="small lightblue box"></Box>
      <Box boxSize="medium" boxColor="pink" boxText="medium pink box"></Box>
      <Box boxSize="large" boxColor="orange" boxText="large orange box"></Box>
    </div>
  )
}

export default App
