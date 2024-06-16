export function ListName(){
    const users = [
        {
            id:1,
            name:'Alejandro',
            age:30,
            image:'https://robohash.org/user1'
        },{
            id:2,
            name:'Pedro',
            age:23,
            image:'https://robohash.org/user2'
        }
    ]
    return(
        <div>
            <ul>
                {
                    users.map((user, i) => {
                        return <li key={i}>{user.name}
                        <img src={user.image} alt="" />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}