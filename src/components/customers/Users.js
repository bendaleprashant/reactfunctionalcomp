import UseFetchData from "./UseFetchData.js"

export default function Users() {
    const { data } = UseFetchData("https://api.github.com/users");

    return (
        <div>
            {data && (
                data.map((user) => (
                    <div  key={user.id}>
                        <h1> {user.login} </h1>
                        <p> {user.type} </p>
                    </div>
                ))
            )}
        </div>
    )
}