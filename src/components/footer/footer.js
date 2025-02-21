import React from 'react'
import Informations from './components/Informations'
import Social from './components/Social'
import CopyRight from './components/copyright'
export default function Footer() {
  return (
    <React.Fragment>
      <Social />
      <Informations />
      <CopyRight />
    </React.Fragment>
  )
}
