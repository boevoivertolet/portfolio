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
                <Route path="/" element={<Navigate to={'portfolio'} />} />
                <Route path="/portfolio" element={<Navigate to={'portfolio/homePage'} />} />

                <Route path="portfolio/portfolioPage" element={<PortfolioPage />} />
                <Route path="portfolio/aboutPage" element={<AboutPage />} />
                <Route path="portfolio/worksPage" element={<WorksPage />} />
                <Route path="portfolio/contactsPage" element={<ContactsPage />} />
                <Route path="portfolio/homePage" element={<HomePage />} />

                <Route path={'/*'} element={<ErrorPage />} />
            </Routes>
        </>
    )
}
