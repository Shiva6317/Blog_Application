"use client"

import Script from "next/script";

export default function GetgeoLocation() {
    return (

        <div className="bg-white">
            <h2 className="text-4xl bg-red-600 p-3 my-3 h-25 z-10">Get Geo Location</h2>
            <h2 className="text-4xl bg-green-400 p-3">local variable here</h2>


            <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 ml-40 mt-10"> 
                Save Changes
            </button>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==" crossorigin="anonymous" referrerpolicy="no-referrer"

                onLoad={() => {
                    gsap.from("h2", {
                        y: -100,
                        opacity:0,
                        zIndex:-1,
                        duration: 1,
                        stagger: 1,

                    })
                }}
            />


            {/* <Script
            src="/geolocation.js"
            onLoad={()=>{
                console.log("file loaded..")
            }} 
            /> */}


        </div >
    )
}