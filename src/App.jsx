import { AuthContext } from './context/AuthContext'
import { AppRouter } from './routers/AppRouter'
import './App.css'

function App() {
  const user = {
    isLogged: false,
    username: 'zeus'
  }

  const tasks = [
    {
      id: 1,
      title: 'Completar prácticos',
      description: 'Completar el práctico de useContext'
    }
  ];

  return (
    <AuthContext.Provider value={{
      user,
      tasks
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App
