import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/navegation";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
