"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree, ThreeEvent } from "@react-three/fiber";
import { Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";
import styles from "./style.module.scss";

// Earth Vertex Shader
const earthVertexShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
    vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;
    vUv = uv;
    vNormal = modelNormal;
    vPosition = modelPosition.xyz;
}
`;

// Earth Fragment Shader
const earthFragmentShader = `
uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform sampler2D uSpecularCloudsTexture;
uniform vec3 uSunDirection;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilightColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = vec3(0.0);

    float sunOrientation = dot(uSunDirection, normal);
    float dayMix = smoothstep(-0.25,0.5,sunOrientation);
    vec3 dayColor = texture(uDayTexture, vUv).rgb;
    vec3 nightColor = texture(uNightTexture, vUv).rgb;
    color = mix(nightColor, dayColor, dayMix);

    vec2 specularCloudsColor = texture(uSpecularCloudsTexture, vUv).rg;

    float cloudsMix = smoothstep(0.5,1.0,specularCloudsColor.g);
    cloudsMix *= dayMix;
    color = mix(color,vec3(1.0),cloudsMix);

    float fresnel = 1.0 + dot(viewDirection, normal);
    fresnel = pow(fresnel,2.0);

    float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
    vec3 atmosphereColor = mix(uAtmosphereTwilightColor, uAtmosphereDayColor, atmosphereDayMix);
    color = mix(color,atmosphereColor,fresnel*atmosphereDayMix);

    vec3 reflection = reflect(-uSunDirection, normal);
    float specular = -dot(reflection, viewDirection);
    specular = max(specular, 0.0);
    specular = pow(specular, 32.0);
    specular *= specularCloudsColor.r;
    
    vec3 specularColor = mix(vec3(1.0),atmosphereColor,fresnel);
    color += specular * specularColor;

    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`;

// Atmosphere Vertex Shader
const atmosphereVertexShader = `
varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
    vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;
    vNormal = modelNormal;
    vPosition = modelPosition.xyz;
}
`;

// Atmosphere Fragment Shader
const atmosphereFragmentShader = `
uniform vec3 uSunDirection;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilightColor;

varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = vec3(0.0);

    float sunOrientation = dot(uSunDirection, normal);

    float atmosphereDayMix = smoothstep(- 0.5, 1.0, sunOrientation);
    vec3 atmosphereColor = mix(uAtmosphereTwilightColor, uAtmosphereDayColor, atmosphereDayMix);
    color = mix(color, atmosphereColor, atmosphereDayMix);
    color += atmosphereColor;

    float edgeAlpha = dot(viewDirection, normal);
    edgeAlpha = smoothstep(0.0, 0.5, edgeAlpha);

    float dayAlpha = smoothstep(- 0.5, 0.0, sunOrientation);

    float alpha = edgeAlpha * dayAlpha;

    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`;

interface EarthProps {
  sunDirection: THREE.Vector3;
  atmosphereDayColor: string;
  atmosphereTwilightColor: string;
}

function Earth({
  sunDirection,
  atmosphereDayColor,
  atmosphereTwilightColor,
}: EarthProps) {
  const earthRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  const [dayTexture, nightTexture, specularCloudsTexture] = useTexture([
    "/assets/images/earth/day.jpg",
    "/assets/images/earth/night.jpg",
    "/assets/images/earth/specularClouds.jpg",
  ]);

  const earthMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: earthVertexShader,
      fragmentShader: earthFragmentShader,
      uniforms: {
        uDayTexture: { value: dayTexture },
        uNightTexture: { value: nightTexture },
        uSpecularCloudsTexture: { value: specularCloudsTexture },
        uSunDirection: { value: sunDirection },
        uAtmosphereDayColor: { value: new THREE.Color(atmosphereDayColor) },
        uAtmosphereTwilightColor: {
          value: new THREE.Color(atmosphereTwilightColor),
        },
      },
    });
  }, [
    dayTexture,
    nightTexture,
    specularCloudsTexture,
    sunDirection,
    atmosphereDayColor,
    atmosphereTwilightColor,
  ]);

  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uSunDirection: { value: sunDirection },
        uAtmosphereDayColor: { value: new THREE.Color(atmosphereDayColor) },
        uAtmosphereTwilightColor: {
          value: new THREE.Color(atmosphereTwilightColor),
        },
      },
      side: THREE.BackSide,
      transparent: true,
    });
  }, [sunDirection, atmosphereDayColor, atmosphereTwilightColor]);

  return (
    <group rotation={[0, -Math.PI / 2, 0]}>
      <Sphere args={[1.6, 64, 64]} ref={earthRef}>
        <primitive object={earthMaterial} attach="material" />
      </Sphere>
      <Sphere args={[1.7, 64, 64]} ref={atmosphereRef}>
        <primitive object={atmosphereMaterial} attach="material" />
      </Sphere>
    </group>
  );
}

function DraggableEarth() {
  const { size, camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previousMousePosition, setPreviousMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const sunDirection = useMemo(() => {
    return new THREE.Vector3(0, -1.6, 0).normalize();
  }, []);

  const atmosphereDayColor = "#00aaff";
  const atmosphereTwilightColor = "#ff6600";

  useEffect(() => {
    const aspect = size.width / size.height;
    const frustumSize = 5;
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = 2 * Math.atan(frustumSize / (2 * 6)) * (180 / Math.PI);
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    }
  }, [size, camera]);

  const onPointerDown = (event: ThreeEvent<PointerEvent>) => {
    setIsDragging(true);
    setPreviousMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const onPointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (isDragging && groupRef.current) {
      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y,
      };

      groupRef.current.rotation.y += deltaMove.x * 0.01;
      groupRef.current.rotation.x += deltaMove.y * 0.01;

      setPreviousMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  const onPointerUp = () => {
    setIsDragging(false);
  };

  useFrame(() => {
    if (groupRef.current && !isDragging) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <Earth
        sunDirection={sunDirection}
        atmosphereDayColor={atmosphereDayColor}
        atmosphereTwilightColor={atmosphereTwilightColor}
      />
    </group>
  );
}

export default function Globe3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Canvas
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 6] }}
        gl={{
          antialias: true,
          pixelRatio: Math.min(window.devicePixelRatio, 2),
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#FFFFFF");
        }}
      >
        <DraggableEarth />
      </Canvas>
    </div>
  );
}
