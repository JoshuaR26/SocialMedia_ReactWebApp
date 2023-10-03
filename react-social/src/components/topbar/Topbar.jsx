import "./topbar.css"
import {Search, Person, Chat, Notifications} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className='topBarContainer'>

        <div className="topBarLeft">
          <span className="logo">JoshSocial</span>
        </div>

        <div className="topBarCenter">
          <div className="searchBar">
            <Search className='searchIcon'/>
            <input placeholder="search for user" className="searchInput"/>
          </div>
        </div>

        <div className="topBarRight">

          <div className="topBarLinks">
            <span className="topBarLink">HomePage</span>
            <span className="topBarLink">Timeline</span>
          </div>

          <div className="topBarIcons">

            <div className="topBarIconItem">
              <Person/>
              <span className='topBarIconBadge'>5</span>
            </div>

            <div className="topBarIconItem">
              <Chat/>
              <span className='topBarIconBadge'>9+</span>
            </div>

            <div className="topBarIconItem">
              <Notifications/>
              <span className='topBarIconBadge'>3</span>
            </div>

          </div>
          <img src="./assets/person/1.jpg" alt="" className="topBarImg" />
        </div>
    </div>
  )
}
