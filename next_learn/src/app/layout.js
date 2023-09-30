"use client"

import "./globals.css"
import { usePathname } from "next/navigation"
import Script from "next/script";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <html lang="en">

      <body className="">
        {
          pathname !== "/login" ? <h1 id="header" className="text-center bg-red-400 text-white py-2 text-6xl">roorE_daoC</h1> : <h1>Login page</h1>
        }

        {children}

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==" crossorigin="anonymous" referrerpolicy="no-referrer"

          onLoad={() => {
            gsap.from("#header", {
              y: -100,
              opacity:0,
              duration: 0.5,
              stagger: 1,

            })
          }}
        />
      </body>
    </html>
  )
}
