import { BrowserRouter } from "react-router-dom";
import "./styles/global.scss";
import WebRouter from "./components/WebRouter";
import { CookiesProvider } from "react-cookie";

function App() {

  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <WebRouter />
        </BrowserRouter>
      </CookiesProvider>
    </>
  )
}

export default App
