import 'bootstrap/dist/css/bootstrap.min.css'
import './common/styles/App.module.scss'
import s from './common/styles/App.module.scss'
import { ContactsSidebar } from './components/ContactsSidebar'
import { Navbar } from './components/Navbar'
import { PortfolioRoutes } from './components/PortfolioRoutes'

function App() {
    return (
        <div className={s.app_wrapper}>
            <Navbar />
            <PortfolioRoutes />
            <ContactsSidebar />
        </div>
    )
}

export default App
