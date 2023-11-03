import './App.css';
import { useLayoutEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import * as THREE from 'three';
import { OrbitControls, Environment } from '@react-three/drei';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ReactLenis } from '@studio-freight/react-lenis';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const tl = gsap.timeline();
  const enter = useRef();
  const future = useRef();
  const bgChanger = useRef();
  const firstSection = useRef();
  const secondSection = useRef();
  const background = useRef();

  useLayoutEffect(() => {
    tl.to(enter.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: '.fifth-section',
        markers: false,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        immediateRender: false,
      },
      onStart: (el) => {
        enter.current.style.position = "fixed";
      },
      onReverseComplete: (el) => {
        enter.current.style.position = "static";
      }
    });
    tl.to(future.current, {
      scale: 200,
      marginTop: '+100vh',
      opacity: 1,
      scrollTrigger: {
        trigger: '.fourth-section',
        markers: false,
        start: '+50vh',
        end: '+500vh',
        scrub: true,
        immediateRender: false,
      },
    });
    tl.to(bgChanger.current, {
      width: '100%',
      scrollTrigger: {
        trigger: '.fifth-section',
        markers: false,
        start: 'top top',
        end: '+200vh',
        scrub: true,
        immediateRender: false,
      },
    }).to(background.current, {
      backgroundColor: 'black',
      scrollTrigger: {
        trigger: '.fifth-section',
        markers: false,
        start: '+400vh',
        end: '+100vh',
        scrub: true,
        immediateRender: false,
      },
    }).to(firstSection.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: '.sixth-section',
        markers: false,
        start: 'top top',
        end: '+200vh',
        scrub: true,
        immediateRender: false,
      },
    }).to(secondSection.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.sixth-section',
        markers: false,
        start: 'top top',
        end: '+200vh',
        scrub: true,
        immediateRender: false,
      },
    });
  }, []);

  return (
    <ReactLenis root>
      <main className='overflow-x-hidden'>
        <div ref={background} className='h-screen w-full fixed top-0'>
          <Canvas
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
            }}
            camera={{
              // fov: 45,
              near: 0.1,
              far: 200,
              position: [0, -5, 0],
            }}
          >
            <Environment preset="dawn" />
            {/* <OrbitControls /> */}
            <Scene />
          </Canvas>
        </div>

        <section ref={firstSection}>
          <div className='absolute top-0 left-0 w-full h-screen flex flex-col'>
            <div className='first-section h-screen shrink-0'>
              <div>
                <h1 className='text-[10rem] font-bold text-center mt-6'>THE NEW SK8</h1>
                <p className='text-center'>a product that no one asked for</p>
              </div>
            </div>
            <div className='zoom h-1/2 shrink-0'></div>
            <div className='second-section flex justify-evenly mb-96'>
              <div className='relative'>
                <div className='sticky top-1/3'>
                  <h2 className='text-4xl'>say goodbye to<br />your old skate</h2>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className="h-screen sub-section">
                  <h3 className='text-2xl mb-6'>wood? 🪵</h3>
                  <p>too bad for the environment</p>
                </div>
                <div className="h-screen sub-section">
                  <h3 className='text-2xl mb-6'>wheels? 🛞</h3>
                  <p>not cool at all</p>
                </div>
                <div className="h-screen sub-section">
                  <h3 className='text-2xl mb-6'>custom stickers? 🥴</h3>
                  <p>they only serve to show how weird you are</p>
                </div>
                <div className="h-screen sub-section">
                  <h3 className='text-2xl mb-6'>do you think you're good? 🛹</h3>
                  <p>the last time you were good on it was on Tony Hawk 2</p>
                  <p>... the old one!</p>
                </div>
              </div>
            </div>
            <div className='third-section h-screen shrink-0'>
              <h2 className='text-4xl text-center'>Still not convinced?</h2>
              <p className='text-center mb-48'>look at those real problems</p>

              <div className='flex gap-16 justify-center items-center overflow-hidden'>
                <div className='h-96 w-96 bg-black shrink-0 text-white flex flex-col justify-between p-6'>
                  <h3 className='text-2xl'>Fear of Rebellious Wood</h3>
                  <p className='text-right'>There's a rumor going around that skateboards are the most rebellious form of wood, known to occasionally ignore the laws of physics and do kickflips on their own.</p>
                </div>
                <div className='h-96 w-96 bg-black shrink-0 text-white flex flex-col justify-between p-6'>
                  <h3 className='text-2xl'>Sneaker Conspiracy</h3>
                  <p className='text-right'>You just bought a fresh pair of sneakers, and they signed a non-compete clause with your feet, claiming exclusive walking rights. Introducing a skateboard to the mix could lead to a sneaky sneaker uprising.</p>
                </div>
                <div className='h-96 w-96 bg-black shrink-0 text-white flex flex-col justify-between p-6'>
                  <h3 className='text-2xl'>Gravity Allergy</h3>
                  <p className='text-right'>You’ve self-diagnosed with a very rare and completely fictional allergy to gravity. It flares up whenever you're more than two inches off the ground, so stepping on a skateboard might just be too much for your delicate constitution.</p>
                </div>
                <div className='h-96 w-96 bg-black shrink-0 text-white flex flex-col justify-between p-6'>
                  <h3 className='text-2xl'>Sock Puppet Scare</h3>
                  <p className='text-right'>Your sock puppet audience insists they only watch performances with less than two wheels.</p>
                </div>
              </div>
            </div>
            <div ref={enter} className='fourth-section h-screen shrink-0 flex flex-col justify-between'>
              <h2 className='text-9xl font-bold'>so we built <br />the skate</h2>
              <h2 className='text-9xl font-bold'>as it should be</h2>
            </div>

            <div className='fifth-section h-[500vh] shrink-0 flex justify-items-center'>
              <div className='w-full flex justify-center'><div ref={bgChanger} className='w-0 h-full bg-black'></div></div>
            </div>
            <div className='sixth-section h-screen shrink-0'>
            </div>
            <div className='seventh-section h-screen shrink-0'>
            </div>
            <div className='eighth-section h-screen shrink-0'>
            </div>
            <div className='ninth-section h-screen shrink-0 bg-black text-white'>
              <h2 className='text-4xl text-center'>This is the future!</h2>
              <p className='text-center mb-48'>that you didn't asked</p>
            </div>
          </div>

          <div ref={future} className='fixed top-0 h-screen w-full flex items-center justify-center leading-none scale-0'>
            <h2 className='text-center font-black'>Enter <br />the future</h2>
          </div>
        </section>

        <section ref={secondSection} className='opacity-0 w-full fixed top-0 text-white'>
          <div className='first-section h-screen shrink-0'>
            <div className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
              <h1 className='text-[10rem] font-bold text-center mt-6'>THE NEW SK8</h1>
              <p className='text-center'>your kids will love it</p>
            </div>
          </div>
          <div className='zoom h-1/2 shrink-0'></div>
          <div className="s-second-section h-[400vh] shrink-0"></div>
          <div className="s-third-section h-[400vh] shrink-0"></div>
          <div className="s-fourth-section h-[400vh] shrink-0"></div>
          <div className="s-fifth-section h-[400vh] shrink-0"></div>
        </section>

      </main>
    </ReactLenis>
  );
}

export default App;;
