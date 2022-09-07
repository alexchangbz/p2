import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import pBg1 from '../../assets/portfolio-1.jpg'
import pBg2 from '../../assets/portfolio-2.jpg'
import pBg3 from '../../assets/portfolio-3.jpg'
import pBg4 from '../../assets/portfolio-4.jpg'
import pBg5 from '../../assets/portfolio-5.jpg'
import './portfolio.css'
import Pagination from '../../components/Pagination/Pagination'
import Posts from '../../components/Post/Posts'

const portfolios_data = [
  { title: "Voting System", description: "Blockchain", image: pBg1, url: "https://ballot-project-main.vercel.app/", stacks: ["react", "solidity", "hardhat"]},
  { title: "Nature Token ERC-20", description: "Blockchain", image: pBg2, url: "https://natureproject-rexjqb39t-alexchangbz.vercel.app/", stacks: ["react", "solidity", "hardhat"]},
  { title: "Micael's Portfolio", description: "Front-end", image: pBg3, url: "https://portfolio-project-micael.netlify.app/", stacks: ["react", "sanity"]},
  { title: "Blockchain Transactions", description: "Blockchain", image: pBg4, url: "https://transactions.vercel.app/", stacks: ["react", "hardhat", "solidity", "vite"]},
  { title: "Happy Toro Website", description: "Front-end", image: pBg5, url: "https://happy-toro.com/", stacks: ["react", "typescript"]},
]

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState('All')
  const [portfolios, setPortfolios] = useState(portfolios_data)
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const postsPerPage = 6

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = portfolios.slice(indexOfFirstPost, indexOfLastPost)
  
  // Change Page
  const paginate = (num) => {
    setCurrentPage(num)
  }

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard({ y: 100, opacity: 0 })
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])
      if (item === "All") {
        setPortfolios(portfolios_data)
      } else {
        console.log(item)
        setPortfolios(portfolios_data.filter((portfolio) => portfolio.description.includes(item)))
      }
    }, 500)
  }

  return (
    <div className="portfolio__container">
      <div className="header__filter">
        <Navbar />
        <div className="portfolio__section">
          <div className="portfolio__filter">
              {['Front-end', 'Blockchain', 'Back-end', 'Full Stack', 'All'].map((item, index) => (
                  <div key={index} 
                      onClick={() => handleWorkFilter(item)} 
                      className={`portfolio__filter-item ${activeFilter === item ? 'item-active' : ''}`}
                  >
                      {item}
                  </div>
              ))}
          </div>
          {portfolios.length > 6 && (<Pagination postsPerPage={postsPerPage} totalPosts={portfolios.length} paginate={paginate} currentPage={currentPage}  />)}
          <Posts posts={currentPosts} animateCard={animateCard} />
          {portfolios.length > 6 && (<Pagination postsPerPage={postsPerPage} totalPosts={portfolios.length} paginate={paginate} currentPage={currentPage}  />)}
        </div>
      </div>
    </div>
  )
}

export default Portfolio