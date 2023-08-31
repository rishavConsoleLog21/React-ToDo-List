import './App.css'
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './TodoList'
import Navbar from './Navbar'
import QuoteFetcher from './QuoteFetcher'
function App() {
  return (
    <>
     <CssBaseline />
     <Navbar />
     <TodoList />
     <QuoteFetcher/>
    </>
  )
}

export default App
