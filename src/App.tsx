import { BrowserRouter } from "react-router-dom";
import "./styles/global.scss";
import WebRouter from "./components/WebRouter";
import { CookiesProvider } from "react-cookie";
import { Bootstrap } from "./components/Bootstrap";

function App() {

  return (
    <>
      <CookiesProvider>
        <Bootstrap />
        <BrowserRouter>
          <WebRouter />
        </BrowserRouter>
      </CookiesProvider>
    </>
  )
}

export default App
