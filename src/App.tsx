import './common/styles/App.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Portfolio } from './components/Portfolio'
import { Navbar } from './components/Navbar'
import s from './common/styles/App.module.scss'

function App() {
    return (
        <div className={s.app}>
            <Navbar />
            <Portfolio />
        </div>
    )
}

export default App
