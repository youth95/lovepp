import './App.css'
import { Stage, Container, Sprite, Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'

export const App = () => {
  const bunnyUrl = 'https://pixijs.io/pixi-react/img/bunny.png'
  return (
    <Stage options={{ background: 0x1099bb, resizeTo: window }}>
      <Sprite image={bunnyUrl} x={0} y={150} />
      <Sprite image={bunnyUrl} x={0} y={150} />
      <Sprite image={bunnyUrl} x={0} y={200} />
      <Container x={200} y={200}>
        <Text
          text='Hello World'
          anchor={0.5}
          x={220}
          y={150}
          style={
            new TextStyle({
              align: 'center',
              fill: '0xffffff',
              fontSize: 50,
              letterSpacing: 20,
              dropShadow: true
              // dropShadowColor: '#E72264',
              // dropShadowDistance: 6
            })
          }
        />
      </Container>
    </Stage>
  )
}
