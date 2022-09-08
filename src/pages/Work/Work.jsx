import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { ReactComponent as BlockIcon } from '../../assets/blockchain.svg'
import { ReactComponent as SchoolIcon } from '../../assets/school.svg'
import { ReactComponent as FinanceIcon } from '../../assets/finance.svg'
import workElements from './worksElements'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './work.css'

const Work = () => {
  let workIconStyles = { background: "#06D6A0" }
  let schoolIconStyles = { background: "#f9c74f" }
  let financeIconStyles = { background: "#3486eb" }

  return (
    <div className="work__container">
      <div className="header__filter">
        <Navbar />
        <h1 className="title">Career Developments</h1>
        <VerticalTimeline>
        {workElements.map(element => {
          let isWorkIcon = element.icon === "work"
          let isFinanceIcon = element.icon === "finance"

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName={"date"}
              iconStyle={isWorkIcon ? workIconStyles : isFinanceIcon ? financeIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <BlockIcon /> : isFinanceIcon ? <FinanceIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">{element.title}</h3>
              <h4 className="vertical-timeline-element-title">{element.company}</h4>
              <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
              <ul className="work__descriptions">
                {element.description.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
      </div>
    </div>
  )
}

export default Work