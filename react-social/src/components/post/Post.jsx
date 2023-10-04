import "./post.css";
import {AddComment, Bookmark, Comment, FavoriteBorder, MoreVert, Share} from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="assets/person/2.jpg" alt="" className="postProfileImg" />
                    <span className="postUsername">David Hasselhoff</span>
                    <span className="postDate">5min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>

            <div className="postCenter">
                <span className="postCaption">Wasssssuppp y'all! </span>
                <img src="assets/post/1.jpg" alt="" className="postImg" />
            </div>

            <div className="postBottom">
                <div className="postBottomLeft">
                    <FavoriteBorder className="postBottomIcon"/>
                    <AddComment className="postBottomIcon"/>
                    <Comment className="postBottomIcon"/>
                </div>
                <div className="postBottomRight">
                    <Bookmark className="postBottomIcon"/>
                    <Share  className="postBottomIcon"/>
                </div>
            </div>
        </div>
    </div>
  )
}
