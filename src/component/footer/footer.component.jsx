import React from 'react'
import * as FS from './footer.style'

export const Footer = () => {

  const currentYear = new Date().getFullYear()
  
  return(
    <FS.Footer>
      &copy; {currentYear} Online Auction. Privacy Policy
    </FS.Footer>
  )
}
