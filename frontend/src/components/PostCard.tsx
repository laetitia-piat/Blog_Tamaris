import { Link } from "react-router-dom";
import "@fontsource/quicksand";

export type PostCardProps = {
  id: number;
  residents: { id: number; name: string }[];
  photo: string;
  titre: string;
  commentaires: number;
};

const PostCard = ({
  photo,
  titre,
  residents,
  id,
  commentaires,
}: PostCardProps) => {
  console.log("photo", photo);
  return (
    <Link to={`/post/${id}`}>
      <div className="flex flex-col h-full">
        <div className="flex flex-col m-4 ">
          <div className="font-quicksand text-center text-xl mb-2 uppercase">
            {titre}
          </div>
          <div className="w-64 h-64 overflow-hidden flex justify-center items-center">
            <img className="object-cover w-full h-full" src={photo} />
          </div>
          <div className="flex flex-col">
            <div>{commentaires} commentaire(s)</div>
            <div className="flex flex-wrap justify-evenly mb-5">
              {residents.map((resident) => (
                <div
                  className="border-1 border-solid border-red-700 rounded-full p-1 mt-2 text-[#4c7d48] font-bold"
                  key={resident.name}
                >
                  {resident.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
