
import Link from "next/link"
import "./globals.css"

export default function Home() {
  return (
    <main className="flex items-center justify-between gap-10 px-10 bg-black p-5 ">
      <div>
        <h1 className="text-white text-5xl first-letter:text-red-500">Shiva</h1>

      </div>
      <div className="flex items-center gap-5">

        <Link className="text-3xl text-white hover:text-blue-300 whitespace-no-wrap" href="/about">go to about</Link>
        <br />  <br />
        <Link className="text-3xl text-white hover:text-blue-300 " href="/login">go to login</Link>
        <br />  <br />
        <Link className="text-3xl text-white hover:text-blue-300 " href="/blog">go to blog</Link>
        <br />  <br />
        <Link className="text-3xl text-white hover:text-blue-300 " href="/studentlist">go to student list</Link>

      </div>
    </main>
  )
}
