import './Navbar.css'
import { Button } from 'antd';

export function Navbar({ setUser, setShowUsers, isAuth }) {
  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setShowUsers(false)
  }
  
  return (
    <nav>
      {isAuth() && (
        <ul className="navbar">
          <li className="nav-item">
            <Button type="primary" onClick={() => setShowUsers(false)}>
              Inicio
            </Button>
          </li>
          <li className="nav-item">
            <Button onClick={() => setShowUsers(true)}>Usuarios</Button>
          </li>
          <li className="nav-item">
            <Button type="primary" danger onClick={logout}>
              Salir
            </Button>
          </li>
        </ul>
      )}
    </nav>
  )
}
