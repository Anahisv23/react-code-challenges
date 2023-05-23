import { useState } from 'react'
import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]

export default function ColorPicker (props) {
  const [backgroundColor, setBackgroundColor] = useState("white")

  return (
    <div className='page' style={{ backgroundColor: backgroundColor }}>
      {
        colors.map(color => (
          <Color key={color.hex} hex={color.hex} colorname={color.name} setBackgroundColor={setBackgroundColor}/>
        ))
      }
    </div>
  )
}
