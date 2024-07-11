import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from '../pages/AboutPage'
import { ContactsPage } from '../pages/ContactsPage'
import { ErrorPage } from '../pages/ErrorPage'
import { HomePage } from '../pages/HomePage'
import { PortfolioPage } from '../pages/PortfolioPage'
import { WorksPage } from '../pages/WorksPage'

export const PortfolioRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={'/homePage'} />} />
                <Route path="/portfolio" element={<Navigate to={'/homePage'} />} />

                <Route path="/portfolioPage" element={<PortfolioPage />} />
                <Route path="/aboutPage" element={<AboutPage />} />
                <Route path="/worksPage" element={<WorksPage />} />
                <Route path="/contactsPage" element={<ContactsPage />} />
                <Route path="/homePage" element={<HomePage />} />

                <Route path={'/*'} element={<ErrorPage />} />
            </Routes>
        </>
    )
}
