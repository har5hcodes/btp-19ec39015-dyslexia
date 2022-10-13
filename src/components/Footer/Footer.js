import React from 'react'
import { Box } from '@mui/material'

const style = {
    backgroundColor: "#c6c6c6",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
  };
  
const Footer = () => {
  return (
     <>
        <Box style={style}>© Copyright Team Dyslexia</Box>
     </>
  )
}

export default Footer