import PortfolioHeader from './PortfolioHeader.jsx'
import PortfolioBody from './PortfolioBody.jsx'
import PortfolioFooter from './PortfolioFooter.jsx'

function App() {

    return (
        <div className="portfolioMain">
            <PortfolioHeader/>
            <div className="lineBreaker"></div>
            <PortfolioBody/>
            <div className="lineBreaker"></div>
            <PortfolioFooter/>
        </div>
    )
}

export default App
