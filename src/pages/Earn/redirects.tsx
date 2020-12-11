import React from 'react'
import { Redirect } from 'react-router-dom'



// Redirects to Earn on landing 
export function RedirectPathToEarn() {
    return <Redirect to='/xETH-G'/>
  }

  // Redirects to stake but only replace the pathname
export function RedirectToStake() {
    return <Redirect to='/xETH-G/ETH/0xaA19673aA1b483a5c4f73B446B4f851629a7e7D6'/>
  }
  
  