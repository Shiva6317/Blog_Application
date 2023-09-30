
// import { useEffect, useState } from "react";
async function userList() {

    let userdata = await fetch("https://dummyjson.com/users");
    userdata = await userdata.json();


    return userdata.users;
}


export default async function User() {


    let users = await userList();

    return (
        <div>
            <h1 className="text-3xl">User Data</h1>

            {
                users.map((user) => (
                    <div >
                        <span className="text-3xl">
                            FirstName :   

                        </span>
                        <span className="text-3xl bg-green-500 ">
                            {user.firstName}

                        </span>
                    </div>
                ))
            }


        </div>
    )
}