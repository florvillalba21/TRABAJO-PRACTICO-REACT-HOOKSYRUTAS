import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { TodosScreen } from "../pages/TodosScreen"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ 
          <PublicRoutes>
            <Login/>
          </PublicRoutes>
        } />

        <Route path='/*' element={
          // Proteger las rutas privadas
          <PrivateRoutes>
            <TodosScreen/>
          </PrivateRoutes>
        } />

      </Routes>
    </BrowserRouter>
  )
}
