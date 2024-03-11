import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CatalogPage from './pages/Catalog/Catalog'
import CardPage from './pages/CardPage/CardPage'
import UsersPage from './pages/UsersPage/UsersPage'
import CreatePage from './pages/CreatePage/CreatePage'
import {Routes,Route} from 'react-router-dom'
import Start from './pages/Start/Start'

function App() {

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Start />} />
        <Route path="/catalog" element = {<CatalogPage />} />
        <Route path="/catalog/:id" element = {<CardPage />} />
        <Route path="/users" element = {<UsersPage />} />
        <Route path="/create" element = {<CreatePage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
