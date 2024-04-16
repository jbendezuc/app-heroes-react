import { Routes,Route } from "react-router-dom";
import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <>
        <Routes>


            <Route path="/*" element={
              <PrivateRoute>
                    <HeroesRoutes />
              </PrivateRoute>
            } />

            {/* 
              PRIMERA FORMA X MODULO
            <Route path="login" element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />
 */}
            {/* SEGUNDA FORMA X CADA RUTA*/}
            <Route path="login/*" element={
              <PublicRoute>
                <Routes>
                  <Route path="/*" element={<LoginPage/>} />
                </Routes>   
              </PublicRoute>
            } />


        </Routes> 
    </>
  )
}


