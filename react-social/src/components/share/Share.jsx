import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

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
                  <PermMedia htmlColor="gray" className="shareIcon"/>
                  <span className="shareOptionText">Photo/Video</span>
                </div>

                <div className="shareOption">
                  <Label htmlColor="gray" className="shareIcon"/>
                  <span className="shareOptionText">Tag</span>
                </div>

                <div className="shareOption">
                  <Room htmlColor="gray" className="shareIcon"/>
                  <span className="shareOptionText">Location</span>
                </div>

                <div className="shareOption">
                  <EmojiEmotions htmlColor="gray" className="shareIcon"/>
                  <span className="shareOptionText">Feeelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
    </div>
  )
}
