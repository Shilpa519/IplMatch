import {Link} from 'react'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/ipl/${id}`} className="item-link">
      <div className="item-container">
        <img src={teamImageUrl} className="team-url" alt={name} />
        <p className="team-name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
