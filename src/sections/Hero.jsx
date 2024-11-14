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
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';

const Hero = () => {

  
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
            <Canvas className='w-full h-full'>
              <Suspense fallback={<CanvasLoader />}>

                <PerspectiveCamera makeDefault position={[0, 0, 20]} /> 

                <HeroCamera isMobile={isMobile}>
                  <HackerRoom 
                    position={sizes.deskPosition} 
                    rotation={[0, -Math.PI, 0]} 
                    scale={sizes.deskScale} 
                  />              
                </HeroCamera>

                <group>
                  <Target position={sizes.targetPosition}/>
                  <ReactLogo position={sizes.reactLogoPosition}/>
                  <Cube position={sizes.cubePosition} />
                  <Rings position={sizes.ringPosition} />
                </group>
                
                <ambientLight intensity={2} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />

              </Suspense>
            </Canvas>
        </div>
      
      <div className='absloute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href='#contact' className='w-fit'>
          <Button name="Let's work togeather" isBeam containerClass="sm:w-fit w-full sm:min-w-96 "/>
        </a>
      </div>

    </section>
  )
} 

export default Hero
