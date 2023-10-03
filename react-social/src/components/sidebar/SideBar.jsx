import "./sidebar.css";
import {RssFeed, Chat, VideoLibrary, Group, Bookmark, EventNote } from "@mui/icons-material";

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">

          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarItemIcon"/>
              <span className="sideBatItemText">Feed</span>
            </li>
            
            <li className="sidebarListItem">
              <Chat className="sidebarItemIcon"/>
              <span className="sideBatItemText">Chats</span>
            </li>

            <li className="sidebarListItem">
              <Group className="sidebarItemIcon"/>
              <span className="sideBatItemText">Groups</span>
            </li>

            <li className="sidebarListItem">
              <VideoLibrary className="sidebarItemIcon"/>
              <span className="sideBatItemText">Reels</span>
            </li>

            <li className="sidebarListItem">
              <Bookmark className="sidebarItemIcon"/>
              <span className="sideBatItemText">Saved</span>
            </li>

            <li className="sidebarListItem">
              <EventNote className="sidebarItemIcon"/>
              <span className="sideBatItemText">Events</span>
            </li>

          </ul>

          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>

          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Johnny John</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/3.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Caroline Jackson</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/4.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Fred</span>
            </li>
            
            <li className="sidebarFriend">
              <img src="/assets/person/5.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Mr.Peanuts</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Johnny John</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/3.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Caroline Jackson</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/4.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Fred</span>
            </li>
            
            <li className="sidebarFriend">
              <img src="/assets/person/5.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Mr.Peanuts</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Johnny John</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/3.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Caroline Jackson</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/4.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Fred</span>
            </li>
            
            <li className="sidebarFriend">
              <img src="/assets/person/5.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Mr.Peanuts</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Johnny John</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/3.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Caroline Jackson</span>
            </li>

            <li className="sidebarFriend">
              <img src="/assets/person/4.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Fred</span>
            </li>
            
            <li className="sidebarFriend">
              <img src="/assets/person/5.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Mr.Peanuts</span>
            </li>

          </ul>
        </div>

    </div>
  )
}
