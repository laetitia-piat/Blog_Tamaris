import { Link } from "react-router-dom";

export type PostCardProps = {
  id: number;
  resident: string;
  photo: string;
  titre: string;
  commentaires: number;
};

const PostCard = ({
  photo,
  titre,
  resident,
  id,
  commentaires,
}: PostCardProps) => (
  <Link to={`/post/${id}`} className="category-navigation-link">
    <div className="conteneur-photo">
      <div className="ad-card-title">{titre}</div>
      <img className="picture" src={photo} />
      <div className="post">
        <div className="ad-card-category">{resident}</div>
        <div>{commentaires} commentaire(s)</div>
      </div>
    </div>
  </Link>
);

export default PostCard;
