import Navbar from "@/components/ui/navbar"
import * as React from 'react';

export default function Home() {
    return (
      <div className='w-full h-screen bg-white flex justify-center items-center'>
        <Navbar />
        <div id="about" className="flex flex-row justify-center items-center w-3/5">
            <div id="window"className="border-2 border-black rounded-sm w-3/5">
                <div className="bg-black h-4 relative flex justify-between">
                  <h2 className="text-white relative bottom-2.5 p-1">underconstruction.txt</h2>
                  <h2 className="text-white relative bottom-2.5 p-1">_ &#x26F6; x</h2>
                </div>
                <div id="window_content" className="flex flex-col justify-center text-center p-5">
                <h1 className="text-3xl font-bold">Under Construction</h1>
                <p>Check back soon for updates.</p>
                </div>
            </div>
        </div>
      </div>
    );
}