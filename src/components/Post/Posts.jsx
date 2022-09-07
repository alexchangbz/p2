import "./post.css"
import viewIcon from "../../assets/view.png"
import githubIcon from "../../assets/github.png"
import { motion } from "framer-motion"

const Posts = ({ posts, animateCard }) => {
  return (
    <motion.div 
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="portfolio__list_container"
    >
      <div className="portfolio__list">
        {posts.map(post => (
          <div className="portfolio__card" key={post.url}>
            <h2>{post.title}</h2>
            <img className="card__image" src={post.image} alt={post.url} />
            <div className="stacks__list">
              {post.stacks.map(stack => (
                <span className="stack__keyword" key={stack}>{stack}</span>
              ))}
            </div>
            <div className="card__links">
              <div className="card__link">
                <a href={post.url} target="_blank" rel="noreferrer">
                  <img src={viewIcon} alt="view-icon" />
                </a>
              </div>
              <div className="card__link">
                {post.github && (
                  <a href={post.github} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="github-icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))} 
      </div>
    </motion.div>
  )
}

export default Posts