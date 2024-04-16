import { AuthProvider } from "./auth/context"
import { AppRouter } from "./router/AppRouter"



export const HeroesApp = () => {
  return (
    <>
      <AuthProvider> {/* Permite compartir la informacion en toda la aplicacion */}
        <AppRouter />
      </AuthProvider>
      
    </>
  )
}


