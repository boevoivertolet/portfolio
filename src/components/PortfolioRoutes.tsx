import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { PortfolioPage } from '../pages/PortfolioPage'
import { AboutPage } from '../pages/AboutPage'
import { WorksPage } from '../pages/WorksPage'
import { ContactsPage } from '../pages/ContactsPage'

export const PortfolioRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={'/homePage'} />} />
                <Route path="/portfolio" element={<Navigate to={'/homePage'} />} />

                <Route path="/portfolioPage" element={<PortfolioPage />} />
                <Route path="/aboutPage" element={<AboutPage />} />
                <Route path="/worksPage" element={<WorksPage />} />
                <Route path="/contactsPage" element={<ContactsPage />} />
                <Route path="/homePage" element={<HomePage />} />
            </Routes>
        </div>
    )
}
