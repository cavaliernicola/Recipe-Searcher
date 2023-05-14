import SideBar from "./components/SideBar/NewSideBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import TopBar from "./components/TopBar/TopBar";
import Home from "./scenes/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Favorites from "./scenes/Favorite/Favorite";
import { AppProvider } from "./context/GlobalContext";
import RecipeDetails from "./scenes/RecipeDetails/RecipeDetails";
import ShowResults from "./scenes/ShowResults/ShowResults";
import FAQ from "./scenes/FAQ/FAQ";

export default function App() {
  return (
    <ProSidebarProvider>
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            
            <AppProvider>
              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/favorite" element={ <Favorites /> } />
                <Route path="/recipe/:id" element={ <RecipeDetails /> } />
                <Route path="/result/:query" element={ <ShowResults /> } />
                <Route path="/faq" element={ <FAQ /> } />
                <Route path="*" element={ <Home /> } />
              </Routes>
            </AppProvider>
            
          </main>
        </div>
    </ProSidebarProvider>
  )
}