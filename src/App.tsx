import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { AppProvider } from "./context/app";

function App() {
  return (
    <AppProvider>
      <Header />
      <Form />
    </AppProvider>
  );
}

export default App;
