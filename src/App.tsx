import './common/styles/App.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PortfolioRoutes } from './components/PortfolioRoutes'
import { Navbar } from './components/Navbar'
import s from './common/styles/App.module.scss'
import { ContactsSidebar } from './components/ContactsSidebar'

function App() {
    return (
        <div className={s.app}>
            <Navbar />
            <PortfolioRoutes />
            <ContactsSidebar />
        </div>
    )
}

export default App
