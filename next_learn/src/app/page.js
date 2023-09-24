

import Link from "next/link"
import "./globals.css"

export default function Home() {
  return (
    <main className="flex items-center gap-10 px-10 bg-black ">
      <h1 className="text-yellow-400">Shiva</h1>

      <Link className="text-white hover:text-blue-300 " href="/about">go to about</Link>
      <br/>  <br/>
      <Link className="text-white hover:text-blue-300 " href="/login">go to login</Link>
      <br/>  <br/>
      <Link className="text-white hover:text-blue-300 " href="/blog">go to blog</Link>
      <br/>  <br/>
      <Link className="text-white hover:text-blue-300 " href="/studentlist">go to student list</Link>


    </main>
  )
}
