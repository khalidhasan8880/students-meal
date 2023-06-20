async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 

export default async function Home() {
 
  const users = await getData()
  console.log(users);

  return (
    <main className="">
      <h3 className='text-4xl font-bold text-center '>
        Home
      </h3>

      <section className="flex justify-center items-center mx-auto container">
        {
          users?.map(user=> <div>{user.name}</div>)
        }
      </section>
    </main>
  )
}
