import { use } from 'react'


const usersData = fetch("https://jsonplaceholder.typicode.com/users").then(res => {
  if (!res.ok) {
    throw new Error("নেটওয়ার্ক সমস্যা হয়েছে")
  }
  return res.json()
})


const Home = () => {

  const users = use(usersData);

  return (
    <div className='content'>
      {
        users.map(user => {
          return <div key={user.id} className='card'>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        })
      }
    </div>
  )
}

export default Home