import React from 'react'

type Slide = {
  image: string,
  title?: string,
  subtitle?: string,
  button1Label?: string,
  button1Link?: string,
}

type SliderProps = {
  slides: Slide[]
}

function Slider({slides}: SliderProps) {
  return (
    <div>Slider</div>
  )
}

export default Slider