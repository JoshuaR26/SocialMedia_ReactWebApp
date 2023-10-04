import "./share.css";
import { PermMedia } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="../assets/person/1.jpg" alt="" className="shareProfileImg" />
                <input placeholder="What's on your mind?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
              <div className="shareOptions">
                <div className="shareOption">
                  <PermMedia className="shareIcon"/>
                  <span className="shareOptionText">Photo/Video</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
