
export default function Home({children}) {
    return (
        <main>
            <h1>About layout  wala page</h1>
            <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
                Save changes
            </button>

            {children}
        </main>
    )
}
