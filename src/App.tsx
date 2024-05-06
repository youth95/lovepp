import './App.css'
import {
  Graphics,
  Sprite,
  Stage,
  ParticleContainer,
  useTick
} from '@pixi/react'
import { Graphics as PixiGraphics } from 'pixi.js'
import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

const BTN_SIZE = 100

const draw = (color: number) => (graphics: PixiGraphics) => {
  graphics.clear()
  graphics.lineStyle(2, 0xffffff, 1)
  graphics.beginFill(color, 1)
  graphics.drawCircle(0, 0, BTN_SIZE / 2)
  graphics.endFill()
}

const useAlive = (alive: number, end?: () => void) => {
  const [remain, setRemain] = useState(alive)
  useTick((du: number) => {
    const newRemaining = Math.max(remain - du, 0)
    if (newRemaining <= 0) {
      end?.()
    }
    setRemain(newRemaining)
  }, remain > 0)
  return remain / alive
}
const Bullet: React.FC<{
  p1: { x: number; y: number }
  p2: { x: number; y: number }
}> = ({ p1, p2 }) => {
  const remain = useAlive(40)
  const t = 1 - remain
  const x = 2 * t * (1 - t) * p1.x + t * t * p2.x
  const y = 2 * t * (1 - t) * p1.y + t * t * p2.y
  return <Sprite source={reactLogo} x={x} y={y} scale={0.5} />
}

const rv = (min: number, max: number) => Math.random() * (max - min) + min

const rz = (d: number) => rv(-d, d)

export const App = () => {
  const [color, setColor] = useState(0x00ff00)
  const [items, setItems] = useState<
    Array<{
      p1: { x: number; y: number }
      p2: { x: number; y: number }
    }>
  >([])

  const drawBtn = useMemo(() => draw(color), [color])
  const reset = () => {
    setColor(0x00ff00)
  }
  return (
    <Stage width={WIDTH} height={HEIGHT} options={{ background: 0x000000 }}>
      <Graphics
        interactive
        onpointerdown={() => {
          setColor(0xff0000)
          setItems([
            ...items,
            {
              p1: { x: rz(200), y: rz(400) },
              p2: { x: 0, y: -400 }
            }
          ])
        }}
        onpointerup={reset}
        onpointerout={reset}
        draw={drawBtn}
        x={WIDTH / 2}
        y={HEIGHT - BTN_SIZE}
      />
      <ParticleContainer
        x={(WIDTH - 35.93) / 2}
        y={HEIGHT - BTN_SIZE - 32 * 3}
        properties={{ position: true }}
      >
        {items.map((item, i) => (
          <Bullet key={i} p1={item.p1} p2={item.p2} />
        ))}
      </ParticleContainer>
    </Stage>
  )
}
