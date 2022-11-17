import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/krain.glb");
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="Plane"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={nodes.Plane.material}
                    scale={7.18}
                />
                <mesh
                    name="container_new002"
                    castShadow
                    receiveShadow
                    geometry={nodes.container_new002.geometry}
                    material={materials.container}
                    position={[-0.51, 1.31, -0.03]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[0.1, 0.27, 0.13]}
                >
                    <mesh
                        name="BezierCurve001"
                        castShadow
                        receiveShadow
                        geometry={nodes.BezierCurve001.geometry}
                        material={nodes.BezierCurve001.material}
                        position={[14.05, -1.18, -7.23]}
                        rotation={[Math.PI / 2, 0, Math.PI / 2]}
                        scale={[5.56, 9.71, 3.74]}
                    />
                    <mesh
                        name="container_new003"
                        castShadow
                        receiveShadow
                        geometry={nodes.container_new003.geometry}
                        material={materials.container}
                        position={[-0.6, 1.03, 1.88]}
                        rotation={[Math.PI / 2, 0, -Math.PI]}
                        scale={[1, 1.49, 0.67]}
                    />
                    <mesh
                        name="Plane001"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane001.geometry}
                        material={materials["krain body"]}
                        position={[-0.12, -0.12, -13.4]}
                        rotation={[Math.PI / 2, 0, -Math.PI]}
                        scale={[3.86, 3.41, 1.43]}
                    />
                </mesh>
                <group
                    name="Krain"
                    position={[-5.74, 3.97, -0.03]}
                    scale={[0.51, 0.33, 0.78]}
                >
                    <mesh
                        name="Cube019"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube019.geometry}
                        material={materials.hosuse}
                    />
                    <mesh
                        name="Cube019_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube019_1.geometry}
                        material={materials["krain body"]}
                    />
                    <mesh
                        name="Cube019_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube019_2.geometry}
                        material={materials["krane hand"]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/krain.glb");
