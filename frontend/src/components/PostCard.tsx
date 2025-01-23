import { Link } from "react-router-dom";

export type PostCardProps = {
  id: number;
  resident: string;
  photo: string;
  titre: string;
};

const PostCard = ({ photo, titre, resident, id }: PostCardProps) => (
  <Link to={`/post/${id}`} className="category-navigation-link">
    <div className="conteneur-photo">
      <div className="ad-card-title">{titre}</div>
      <img className="picture" src={photo} />
      <div className="post">
        <div className="ad-card-category">{resident}</div>
        {/* <div className="ad-card-tags">{tags}</div> */}
      </div>
      <div className="button-ad-card"></div>
    </div>
  </Link>
);

export default PostCard;
