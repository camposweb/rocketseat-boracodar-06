import { BoardingPass } from './components/BoardingPass'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './styles/global.scss'

function App() {
  
  return (
    <div className="container">
      <Header />
      <BoardingPass />
      <Footer />
    </div>
  )
}

export default App
