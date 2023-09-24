

import Link from "next/link"

export default function Home() {
    const students = [
        { studentname: "shiva" },
        { studentname: "mukesh" },
        { studentname: "anant" },
        { studentname: "shivjeet" },

    ]


    return (
        <main>
            <h1>Dynamic Routes wala page</h1>

            <ul>
                {students.map((student) => (
                    <li key={student.studentname}>
                        <Link href={`/studentlist/${student.studentname}`}>
                            {student.studentname}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )

    {/* <ul>
                <Link href="/studentlist/shiva">
                    <li>Shiva</li>

                </Link>
                <Link href="/studentlist/mukesh">
                    <li>Mukesh</li>

                </Link>
                <Link href="/studentlist/anant">
                    <li>Anant</li>

                </Link>
                <Link href="/studentlist/shivjeet">
                    <li>Shivjeet</li>

                </Link>
{ 
    }



            </ul>
   
    students.map((student)=>{
                <ul>
                    <Link href={`/studentlist/${students.student}`}>
                        <li>{students.student}</li>

                    </Link>
                </ul>
            })
        }
 */}

}
