// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = (props) => {
  const { size, style, ...children } = props;
  return <div className={`box box--${size}`} style={style} {...children} />
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue',fontStyle: 'italic'}}><span>small lightblue box</span></Box>
      <Box size="medium" style={{backgroundColor: 'pink',fontStyle: 'italic'}}><span>medium pink box</span></Box>
      <Box size="large" style={{backgroundColor: 'orange',fontStyle: 'italic'}}><span>large orange box</span></Box>
    </div>
  )
}

export default App
