import SideBar from "../../components/sidebar/SideBar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/righbar/RightBar";
import "./home.css"

export default function Home() {
  return (
  <>
    <Topbar/>
    <div className="homeContainer">
      <SideBar/>
      <Feed/>
      <RightBar/>
    </div>
  </>
  )
}
