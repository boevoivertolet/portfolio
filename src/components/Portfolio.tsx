import { Route, Routes, Navigate } from 'react-router-dom'
import { GreetingsPage } from '../pages/GreetingsPage'
import { PortfolioPage } from '../pages/PortfolioPage'

export const Portfolio = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={'/greetingsPage'} />} />
                <Route path="/portfolio" element={<Navigate to={'/greetingsPage'} />} />

                <Route path="/portfolioPage" element={<PortfolioPage />} />
                <Route path="/greetingsPage" element={<GreetingsPage />} />
            </Routes>
        </div>
    )
}
