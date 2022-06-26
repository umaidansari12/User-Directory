import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FormComponent from "./components/FormComponent";
import Header from "./components/Header";
import TableComponent from "./components/TableComponent";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <FormComponent />
      <TableComponent/> */}
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
