import Navbar from "@/components/ui/navbar"
import Grid from "@/components/ui/grid"
import * as React from 'react'
import cover from '@/src/images/charliecoverphoto.jpg'
import intothewoods from '@/src/images/intothewoods.jpeg'
import springawakening from '@/src/images/springawakening.jpeg'

export default function Home() {
    return (
      <main className='w-full h-full animated-background bg-gradient-radial from-yellow-50 to-blue-100 lg:flex lg:justify-center lg:p-6 lg:pt-[5rem]'>
        <Navbar />

        <div className="bg-white shadow-lg border-2 overflow-hidden w-screen">
          <div id="grid_spacer" className="h-[121px] w-full relative">
              <Grid />
          </div>

          <div id="hero_container" className="p-2 flex flex-col justify-center items-center">

            <div id="hero_banner" className="flex flex-col lg:flex-row w-full justify-center items-center mt-3 pb-10 popin">
              <div id="hero_img" className="w-2/5 p-10 min-w-[350px] max-w-[550px] relative z-20">
                <div id="img_background" className="inline-block relative after:absolute after:left-10 after:top-9 after:border-2 after:border-slate-700 after:w-full after:h-full after:-z-10">
              
                  <div id="window"className="border-2 border-black rounded-sm">
                    <div className="bg-black h-4 relative flex justify-between">
                      <h2 className="text-white relative bottom-1.5 p-1 font-mono text-[0.75rem]">coverphoto.jpg</h2>
                      <h2 className="text-white relative bottom-2.5 p-1">_ &#x26F6; x</h2>
                    </div>
                    <div id="window_content" className="flex justify-center text-center">
                      <img src={cover.src} className="align-bottom"/>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div id="cover_text" className="w-full lg:w-1/2 text-center flex flex-col justify-center items-center m-5">
                <h3 className="text-5xl p-1">Hi, I'm <span className="text-5xl font-bold inline-block relative w-[max-content]
              before:absolute before:inset-0 before:animate-typewriter
              before:bg-white
              after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
              after:bg-black">Charlie McDonald</span></h3>
                <h1 className="p-2">I'm a sophomore at UC Berkeley majoring in Computer Science and Applied Math
                </h1>
                <div id="hero_buttons" className="p-3">
                  <a href='/about'>
                    <button className="border-black border-2 w-fit p-2 m-3 hover:m-2 rounded-sm hover:bg-black hover:text-white hover:p-3 transition-all duration-200">About Me</button>
                  </a>
                  <a download="CharlieMcDonaldResume" target='_blank'>
                    <button className="border-black border-2 w-fit p-2 m-3 hover:m-2 rounded-sm hover:bg-black hover:text-white hover:p-3 transition-all duration-200">Download CV</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="grid_spacer" className="h-[241px] w-full relative">
              <Grid />
          </div>

          <div id="skills_container" className="flex flex-col text-center items-center py-[5rem] w-full bg-[#f2f2f2]">
            <h3 className="text-4xl font-bold">I'm proficient in:</h3>

            <div id="skills" className="w-full flex flex-col lg:flex-row justify-center items-center *:mx-5">
              <div className="w-[300px] h-[300px] flex justify-center flex-col items-center">
                <svg width="100px" height="100px" viewBox="0 0 24 24" strokeWidth="1.0" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C7.35064 20 7.68722 19.9398 8 19.8293" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.26392 15.6046C2.9243 14.9582 2.00004 13.587 2.00004 12C2.00004 10.7883 2.53877 9.70251 3.38978 8.96898" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.42053 8.8882C3.1549 8.49109 3 8.01363 3 7.5C3 6.11929 4.11929 5 5.5 5C6.06291 5 6.58237 5.18604 7.00024 5.5" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.23769 5.56533C7.08524 5.24215 7 4.88103 7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V20" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 7C12 8.65685 13.3431 10 15 10" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.6102 8.96898C21.4612 9.70251 22 10.7883 22 12C22 12.7031 21.8186 13.3638 21.5 13.9379" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.5795 8.8882C20.8451 8.49109 21 8.01363 21 7.5C21 6.11929 19.8807 5 18.5 5C17.9371 5 17.4176 5.18604 16.9998 5.5" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5C17 4.88103 16.9148 5.24215 16.7623 5.56533" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 22C12.8954 22 12 21.1046 12 20" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.6667 16L17 19H21L19.3333 22" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <h1 className="text-2xl m-5">Machine Learning & Artifical Intelligence</h1>
              </div>
              <div className="w-[300px] h-[300px] flex justify-center flex-col items-center">
                <svg width="100px" height="100px" viewBox="0 0 24 24" strokeWidth="1.0" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M14 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V15" stroke="#000000" strokeWidth="1.0" strokeLinecap="round"></path><path d="M2 7L22 7" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 5.01L5.01 4.99889" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 5.01L8.01 4.99889" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 5.01L11.01 4.99889" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path fillRule="evenodd" clipRule="evenodd" d="M22.0822 18.3651C22.576 18.6689 22.5457 19.4082 22.0371 19.4658L19.4705 19.7568L18.3193 22.0691C18.0911 22.5273 17.386 22.3029 17.2695 21.735L16.0142 15.619C15.9157 15.139 16.3471 14.837 16.7644 15.0937L22.0822 18.3651Z" stroke="#000000" strokeWidth="1.0"></path></svg>
                <h1 className="text-2xl m-5">UI, UX, & Responsive <br></br>Web Design</h1>
              </div>
              <div className="w-[300px] h-[300px] flex justify-center flex-col items-center">
                <svg width="100px" height="100px" strokeWidth="1.0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M1 21V3C1 1.89543 1.89543 1 3 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21Z" stroke="#000000" strokeWidth="1.0"></path><path d="M15 7L17 7H19" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 15.5H17L19 15.5" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 18.5H17H19" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 7H7M9 7H7M7 7V5M7 7V9" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.58609 18.4142L7.0003 17M8.41452 15.5858L7.0003 17M7.0003 17L5.58609 15.5858M7.0003 17L8.41452 18.4142" stroke="#000000" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <h1 className="text-2xl m-5">Algorithms & Software Engineering</h1>
              </div>
            </div>

            <h3 className="text-3xl items-center flex flex-col lg:flex-row justify-center">Want to see my skills at work?
              <a href='/portfolio' className="inline-block px-5">
                <button className="inline text-xl border-black border-2 w-fit p-2 m-3 hover:m-2 rounded-sm hover:bg-black hover:text-white hover:p-3 transition-all duration-200">Check out my project portfolio &#x21e8;</button>
              </a>
            </h3>

          </div>

          <div id="hobby_container" className="flex flex-col text-center items-center m-[5rem]">
            <h3 className="text-4xl p-2 font-bold">I also love to pursue creative endevors</h3>
            
            <div className="w-[80%] flex flex-col lg:flex-row my-10 lg:my-0 justify-around items-center">
              <div id="hobby_text" className="text-left ml-auto">
                <p className="leading-loose text-left">
                  I've been involved in musical theatre for over a decade, <br/>
                  and have performed both on stage and on screen. <br/> <br/>

                  Notable Roles Include: 
                </p>
                <ul className="list-disc text-left leading-loose py-3 w-[90%] ml-auto">
                  <li>Hanschen, Spring Awakening, BareStage Productions (2023)</li>
                  <li>Narrator / Mysterious Man, Into the Woods, BareStage Productions (2024)</li>
                  <li>Ludwig, Boxes, Cinematic Arts and Production Club (2022)</li>
                </ul>
                <p className="leading-loose text-left">
                  <br/>
                  I make writeups documenting and reflecting on all my projects <br />
                  which I post on my website.
                </p>
              </div>
              <div className="">
                <div id="hobby_img" className="flex lg:block lg:w-2/5 lg:mt-10 p-10 relative z-20">
                  <div id="intothewoods" className="m-2 w-[200px] inline-block relative after:absolute after:left-10 after:top-9 after:border-2 after:border-slate-700 after:w-full after:h-full after:-z-10">
                
                    <div id="window"className="border-2 border-black rounded-sm">
                      <div className="bg-black h-4 relative flex justify-between">
                        <h2 className="text-white relative bottom-1.5 p-1 font-mono text-[0.75rem]">intothewoods.jpg</h2>
                        <h2 className="text-white relative bottom-2.5 p-1">_ &#x26F6; x</h2>
                      </div>
                      <div id="window_content" className="flex justify-center text-center">
                        <img src={intothewoods.src} className="align-bottom"/>
                      </div>
                    </div>
                  </div>

                  <div id="springawakening" className="m-2 w-[211px] inline-block relative lg:bottom-[7rem] lg:left-[7rem] after:absolute after:left-10 after:top-9 after:border-2 after:border-slate-700 after:w-full after:h-full after:-z-10">
                
                    <div id="window"className="border-2 border-black rounded-sm">
                      <div className="bg-black h-4 relative flex justify-between">
                        <h2 className="text-white relative bottom-1.5 p-1 font-mono text-[0.75rem]">springawakening.jpg</h2>
                        <h2 className="text-white relative bottom-2.5 p-1">_ &#x26F6; x</h2>
                      </div>
                      <div id="window_content" className="flex justify-center text-center">
                        <img src={springawakening.src} className="align-bottom"/>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <h3 className="text-3xl items-center justify-center m-3 w-full">Read about my problem solving process
              <a href='/blog' className="inline-block px-5">
                <button className="inline text-xl border-black border-2 w-fit p-2 m-3 hover:m-2 rounded-sm hover:bg-black hover:text-white hover:p-3 transition-all duration-200">Check out my blog &#x21e8;</button>
              </a>
            </h3>
          </div>
        </div>
      </main>
    );
}