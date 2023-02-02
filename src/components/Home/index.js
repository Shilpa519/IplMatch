import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardsData: []}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    console.log(response.status)
    const data = await response.json()
    const resultData = data.teams
    console.log(resultData)
    const requiredData = resultData.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({teamCardsData: requiredData})
  }

  render() {
    const {teamCardsData} = this.state
    return (
      <div className="home-container">
        <div className="image-title">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="title">IPL Dashboard</h1>
        </div>
        <ul className="team-details-container">
          {teamCardsData.map(item => (
            <TeamCard key={item.id} teamCardDetails={item} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
