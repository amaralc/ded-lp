import { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'

const styles = createStyles({
  root: {
    width: '100%',
    height: 500
  }
})

const useStyles = makeStyles(styles)

type Props = {
  position: number[]
}

const Box: NextPage<Props> = (props: Props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={event => setActive(!active)}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Cubes: NextPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default Cubes
