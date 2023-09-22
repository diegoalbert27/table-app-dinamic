import axios from "axios"
import { useQuery } from "react-query"

import { useEffect, useState } from "react"
import { TableUser } from "./components/TableUser"
import { Login } from "./components/Login"
import { Layout } from "./components/Layout"
import { Loading } from "./components/Loading"

function App() {
  const { isLoading, data } = useQuery("users", async () => {
    const response = await axios.get("https://dummyjson.com/users")
    return response.data
  })

  const [user, setUser] = useState(null)
  const [showUsers, setShowUsers] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      setUser(user)
    }
  }, [])

  const isAuth = () => (user ? true : false)

  if (isLoading) return <Loading />

  const users = data.users.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    image: user.image,
  }))

  return (
    <>
      <Layout setShowUsers={setShowUsers} setUser={setUser} isAuth={isAuth}>
        {!isAuth() && <Login setUser={setUser} />}

        {showUsers && isAuth() && (
          <TableUser users={users} />
        )}

        {!showUsers && isAuth() && (
          <div
            style={{
              height: "67vh",
            }}
          >
            <h1>Bienvenido</h1>
          </div>
        )}
      </Layout>
    </>
  )
}

export default App
