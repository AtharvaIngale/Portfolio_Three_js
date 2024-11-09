import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
// import { Leva, useControls } from 'leva';
import { calculateSizes } from '../contansts/index.js';
import { useMediaQuery } from 'react-responsive';
import { Group } from 'three/examples/jsm/libs/tween.module.js';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';

const Hero = () => {

  // const x = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10
  //   }
  // });

  const isMobile = useMediaQuery({maxWidth: 768});

  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

  const isSmall = useMediaQuery({maxWidth: 440});

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative'>

        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 '>

            <p className='sm:text-2xl text-xl font-medium font-serif text-center text-white'>Hi!, I am <b>Atharva Ingale</b><span className='waving-hand'>👋</span></p>

            <p className='hero_tag text-gray_gradient'>Innovating through CODE <br></br> Elevating through DESIGN</p>

        </div>

        <div className='w-full h-full absolute inset-0'>
            {/* <Leva></Leva> */}
            <Canvas className='w-full h-full'>
              <Suspense fallback={<CanvasLoader />}>

              <PerspectiveCamera makeDefault position={[0, 0, 20]} /> 
              <HackerRoom 
              position={sizes.deskPosition} 
              rotation={[0, -Math.PI, 0]} 
              scale={sizes.deskScale} 
              />
              <group>
                <Target position={sizes.targetPosition}/>
                <ReactLogo position={sizes.reactLogoPosition}/>
              </group>
              <ambientLight intensity={2} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />

              </Suspense>
            </Canvas>
        </div>
      
    </section>
  )
} 

export default Hero
