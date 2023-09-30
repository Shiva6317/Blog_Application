import Image from 'next/image'
export default function Home() {
    return (
      <main>
        <h1>Blog wala page</h1>
        <Image
      src="https://c4.wallpaperflare.com/wallpaper/945/487/732/ai-art-astronaut-spacesuit-space-science-fiction-hd-wallpaper-preview.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    />
      </main>
    )
  }
  






  //for seo metadata setting for any page
  
  export function  generateMetadata(){
    return {
      title:"blog wala page",
      description:"user page description"

    }
  }