import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css'
import Header from './components/Header'


function App() {


  return (
    <>
    <div className="container">
        <Header/>
        <AddTask/>
        <Tasks/>
    </div>
    </>
  )
}

export default App
