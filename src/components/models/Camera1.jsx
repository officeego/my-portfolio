/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Camera1 = React.memo(function Camera1(props) {
  // Use React.memo for performance optimization
  // const { nodes, materials } = useGLTF("/models/drone_gltf.glb");
  const { nodes, materials, animations } = useGLTF('/models/camera1.glb')
  // const { actions } = useAnimations(animations, group)
  // const modelRef = useRef();
  const group = useRef()

  useFrame(() => {
    group.current.rotation.y += 0.007;
  });

  return (
    <group ref={group} {...props} dispose={null} scale={0.09}>
    <group name="AuxScene">
      <group>
        <mesh
          name="Object"
          castShadow
          receiveShadow
          geometry={nodes.Object.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="FCD__Placement_4231"
            position={[-6.952, 0.866, -1.087]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <group
            name="FCD__Placement_4233"
            position={[-2.083, -0.82, 2.665]}
            rotation={[1.266, -0.214, 0.593]}
          />
          <group
            name="FCD__Placement_4234"
            position={[4.71, -1.011, 2.696]}
            rotation={[1.213, 0.29, -0.653]}
          />
          <group
            name="FCD__Placement_4235"
            position={[-0.985, -1.022, 2.855]}
            rotation={[1.275, -0.213, 0.607]}
          />
          <group
            name="FCD__Placement_4239"
            position={[6.965, 0.053, -0.676]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <group
            name="FCD__Placement_4240"
            position={[6.965, 0, -3.192]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <group
            name="FCD__Placement_4241"
            position={[6.965, 1.794, -1.29]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <group
            name="FCD__Placement_4260"
            position={[-0.564, 3.207, 1.763]}
            rotation={[-1.064, 0.078, 0.14]}
          />
          <group
            name="FCD__Placement_4269"
            position={[5.172, 0.231, 3.096]}
            rotation={[0.102, 0.258, -0.026]}
          />
          <group
            name="FCD__Placement_4270"
            position={[1.78, 0.406, -4.919]}
            rotation={[2.428, 0.132, -3.029]}
          />
          <group
            name="FCD__Placement_4271"
            position={[-5.351, -0.792, -5.036]}
            rotation={[-3.142, 0, -Math.PI]}
          />
        </mesh>
        <mesh
          name="Object018"
          castShadow
          receiveShadow
          geometry={nodes.Object018.geometry}
          material={materials.key}
          position={[0.217, 0.119, -0.73]}
          rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="FCD__Placement_4232"
            position={[1.716, -1.024, -0.596]}
            rotation={[1.5, 0, 0]}
          />
          <group
            name="FCD__Placement_4236"
            position={[1.65, -1.811, -2.952]}
            rotation={[1.126, -0.176, 0.353]}
          />
          <group
            name="FCD__Placement_4237"
            position={[5.751, -1.855, -0.607]}
            rotation={[1.57, 0.069, -1.562]}
          />
          <group
            name="FCD__Placement_4238"
            position={[1.631, -2.459, 2.375]}
            rotation={[1.571, 0, 0]}
          />
          <group
            name="FCD__Placement_4242"
            position={[4.642, 2.597, 1.886]}
            rotation={[-1.396, -0.015, -0.084]}
          />
          <group
            name="FCD__Placement_4244"
            position={[1.616, 3.723, 2.02]}
            rotation={[-Math.PI / 2, 0, 2.028]}
          />
          <group
            name="FCD__Placement_4246"
            position={[-2.231, 2.791, 1.972]}
            rotation={[-1.501, -0.011, -0.157]}
          />
          <group
            name="FCD__Placement_4247"
            position={[-2.827, 2.682, -0.237]}
            rotation={[-1.571, 0, 0]}
          />
          <group
            name="FCD__Placement_4248"
            position={[-3.951, 2.625, -0.215]}
            rotation={[-1.571, 0, 0]}
          />
          <group
            name="FCD__Placement_4249"
            position={[-3.762, 2.934, -2.179]}
            rotation={[-1.514, 0.011, 0.196]}
          />
          <group
            name="FCD__Placement_4250"
            position={[-3.743, 2.861, -1.331]}
            rotation={[-1.965, -0.038, -3.051]}
          />
          <group
            name="FCD__Placement_4251"
            position={[-4.39, 2.682, -4.24]}
            rotation={[-1.571, 0, 0]}
          />
          <group
            name="FCD__Placement_4252"
            position={[-3.383, 2.682, -4.178]}
            rotation={[-1.571, 0, 0]}
          />
          <group
            name="FCD__Placement_4253"
            position={[-5.167, 2.437, -3.053]}
            rotation={[-Math.PI / 2, -0.13, -1.571]}
          />
          <group
            name="FCD__Placement_4254"
            position={[-3.613, 2.468, 2.246]}
            rotation={[-1.234, -0.068, -0.19]}
          />
          <group
            name="FCD__Placement_4255"
            position={[-5.568, 2.669, 2.1]}
            rotation={[-1.279, -0.08, -0.261]}
          />
          <group
            name="FCD__Placement_4256"
            position={[-6.28, 2.599, 2.011]}
            rotation={[-1.29, -0.182, -0.561]}
          />
          <group name="FCD__Placement_4257" position={[1.659, 1.482, 4.707]} />
          <group
            name="FCD__Placement_4258"
            position={[-1.949, 0.146, 3.673]}
            rotation={[0, -0.09, 0]}
          />
          <group
            name="FCD__Placement_4259"
            position={[-0.826, 3.459, 2.684]}
            rotation={[-1.571, 0, 0]}
          />
          <group
            name="FCD__Placement_4261"
            position={[-4.749, 0.112, 3.44]}
            rotation={[0.192, -0.116, 0.022]}
          />
          <group
            name="FCD__Placement_4262"
            position={[-4.082, -1.3, 3.551]}
            rotation={[0.038, -0.059, 0.002]}
          />
          <group
            name="FCD__Placement_4263"
            position={[-4.099, -3.116, 3.574]}
            rotation={[-0.056, 0.038, 0.002]}
          />
          <group
            name="FCD__Placement_4264"
            position={[-5.112, -2.49, 3.78]}
            rotation={[0, -0.015, 0]}
          />
          <group
            name="FCD__Placement_4265"
            position={[-4.959, -4.052, 2.888]}
            rotation={[0.757, -0.05, 0.047]}
          />
          <group
            name="FCD__Placement_4266"
            position={[-6.686, 0.041, 2.984]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <group
            name="FCD__Placement_4267"
            position={[6.367, 0.272, 2.729]}
            rotation={[0, 1.571, 0]}
          />
          <group
            name="FCD__Placement_4268"
            position={[5.012, 1.378, 3.098]}
            rotation={[0, 0.152, 0]}
          />
          <group
            name="FCD__Placement_4272"
            position={[-6.108, -1.504, -5.145]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <group
            name="FCD__Placement_4273"
            position={[5.593, 2.598, 1.878]}
            rotation={[-1.385, 0.042, 0.221]}
          />
          <group
            name="FCD__Placement_4274"
            position={[-2.865, 2.682, 0.727]}
            rotation={[-1.571, 0, 0]}
          />
          <group
            name="FCD__Placement_4275"
            position={[-2.038, -2.036, -3.624]}
            rotation={[1.52, -0.01, 0.196]}
          />
        </mesh>
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.FCD__Glass_All}
          position={[1.876, 3.262, -4.306]}
          rotation={[Math.PI, 0, -Math.PI]}>
          <group name="FCD__Placement_4243" position={[-0.038, 0.099, 0]} />
        </mesh>
        <mesh
          name="Sphere001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.FCD__GlassAR_G}
          position={[1.873, 3.275, -3.993]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={[2.437, 0.584, 1.702]}
        />
        <mesh
          name="Object019"
          castShadow
          receiveShadow
          geometry={nodes.Object019.geometry}
          material={materials.key}
          position={[6.613, -1.902, -3.046]}
          rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            name="Object020"
            castShadow
            receiveShadow
            geometry={nodes.Object020.geometry}
            material={materials.key}
            position={[-0.442, 0.023, 0.027]}>
            <mesh
              name="Object010"
              castShadow
              receiveShadow
              geometry={nodes.Object010.geometry}
              material={materials.FCD__Glass_All}
              position={[-4.2, 0.279, -0.102]}
              rotation={[0, 0, -Math.PI]}
              scale={1.035}>
              <group
                name="FCD__Placement_4245"
                position={[0.13, 0, 0.381]}
                rotation={[Math.PI / 2, 0, 2.051]}
              />
            </mesh>
            <mesh
              name="FCD__Screen_1"
              castShadow
              receiveShadow
              geometry={nodes.FCD__Screen_1.geometry}
              material={materials.FCD__Screen_1}
              position={[-4.196, 0.266, 0.11]}
            />
          </mesh>
        </mesh>
      </group>
    </group>
  </group>
  );
});

export default Camera1;
useGLTF.preload("/models/camera1.glb");
