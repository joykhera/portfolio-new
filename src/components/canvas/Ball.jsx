import { useRef, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import {
    Decal,
    OrbitControls,
    Preload,
    useTexture,
    PerspectiveCamera,
} from "@react-three/drei";
import { technologies } from "../../constants";
import poppins from '../../assets/fonts/Poppins/Poppins.json'
import { Center } from "@react-three/drei";

extend({ TextGeometry })


const Ball = (props) => {
    const ref = useRef()
    const [decal] = useTexture([props.imgUrl]);
    useFrame((state, delta) => (ref.current.rotation.x += delta))

    return (
        <mesh
            {...props}
            ref={ref}
            // scale={clicked ? 1.5 : 1}
            scale={0.75}
            // onClick={(event) => click(!clicked)}
            onPointerOver={(event) => props.onHover(props.name)}
            onPointerOut={(event) => props.onHover(null)}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
                polygonOffset
                polygonOffsetFactor={-5}
                flatShading
                color={props.hoveredOn == props.name ? 'hotpink' : '#fff8eb'}
            />
            <Decal
                position={[0, 0, 1]}
                rotation={[2 * Math.PI, 0, 6.25]}
                scale={1.5}
                map={decal}
                flatShading
            />
            <Decal
                position={[0, 0, -1]}
                rotation={[2 * Math.PI, 0, 6.25]}
                scale={1.5}
                map={decal}
                flatShading
            />
        </mesh>
    )
}

const BallCanvas = () => {
    const scale = Math.PI * 2 / (technologies.length)
    const font = new FontLoader().parse(poppins)
    const [hoveredOn, onHover] = useState(null)
    let text = hoveredOn || 'Technologies'
    const ballSpace = 5

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <PerspectiveCamera makeDefault position={[0, 0, 15]} />
            {technologies.map((technology, i) => (
                // <Ball position={[i % 5 * 2, Math.floor(i / 5) * 2, 0]} key={technology.name} imgUrl={technology.icon} />
                <Ball position={[Math.cos(scale * i) * ballSpace, Math.sin(scale * i) * ballSpace, 0]} key={technology.name} name={technology.name} imgUrl={technology.icon} hoveredOn={hoveredOn} onHover={onHover} />
            ))}
            <Center>
                <mesh position={[-(text.length / 4), 0, 0]}>
                    <textGeometry args={[text, { font, size: 0.75, height: 0.5 }]} />
                    <meshLambertMaterial attach='material' color={'white'} />
                </mesh>
            </Center>
            <OrbitControls enableZoom={false} zoom={0.5} />
            <Preload all />
        </Canvas>
    )
}

export default BallCanvas;
