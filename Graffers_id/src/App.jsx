import CompanyList from "./pages/HomeScreen"
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import RevCard from "./components/RevCard";
import ErrorBoundary from "./components/ErrorBoundary";
import AppInitializer from "../public/demoData";

function App() {
  return (
    <>
      <AppInitializer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CompanyList />} />
          <Route 
            path="/company/:id" 
            element={
              <ErrorBoundary>
                <RevCard />
              </ErrorBoundary>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
