"use client"

import "./globals.css"
import { usePathname } from "next/navigation"


export default function RootLayout({ children }) {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <html lang="en">

      <body className="">
        {
          pathname !== "/login" ? <h1 className="text-center bg-red-400 text-white py-2">roorE_daoC</h1> : <h1>Login page</h1>
        }

        {children}</body>




    </html>
  )
}
