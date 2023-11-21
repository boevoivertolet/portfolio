import { Route, Routes, Navigate } from 'react-router-dom'
import { GreetingsPage } from '../pages/GreetingsPage'
import { PortfolioPage } from '../pages/PortfolioPage'
import { AboutPage } from '../pages/AboutPage'
import { WorksPage } from '../pages/WorksPage'
import { ContactsPage } from '../pages/ContactsPage'

export const Portfolio = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={'/greetingsPage'} />} />
                <Route path="/portfolio" element={<Navigate to={'/greetingsPage'} />} />

                <Route path="/portfolioPage" element={<PortfolioPage />} />
                <Route path="/aboutPage" element={<AboutPage />} />
                <Route path="/worksPage" element={<WorksPage />} />
                <Route path="/contactsPage" element={<ContactsPage />} />
                <Route path="/greetingsPage" element={<GreetingsPage />} />
            </Routes>
        </div>
    )
}
