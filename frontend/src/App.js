import { AuthProvider } from "./context/auth";
import RoutesAplication from "./Routes";

function App() {
  return (
    <AuthProvider>
      <RoutesAplication/>
    </AuthProvider>
  );
}

export default App;
