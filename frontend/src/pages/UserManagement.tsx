import { useGetUserInfoQuery } from "../generated/graphql-types";
import UserAdmin from "../components/UserAdmin";
import { useState } from "react";
import ResidentAdmin from "../components/ResidentAdmin";
import PicturesAdmin from "../components/PicturesAdmin";
import CommentAdmin from "../components/CommentAdmin";

const UserManagement = () => {
  const userInfos = useGetUserInfoQuery();
  const [user, setUser] = useState(false);
  const [resident, setResident] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [comment, setComment] = useState(false);

  if (userInfos.data?.getUserInfo.role === "SUPERADMIN") {
    return (
      <>
        <div className="flex justify-evenly items-center bg-[#f7f0e1] mt-10 h-[60px]">
          <button
            className="bg-[#4c7d48] p-2 rounded-2xl text-white"
            onClick={() => {
              setUser(true);
              setResident(false);
              setPhoto(false);
              setComment(false);
            }}
          >
            Gestion des utilisateurs
          </button>
          <button
            className="bg-[#4c7d48] p-2 rounded-2xl text-white"
            onClick={() => {
              setResident(true);
              setUser(false);
              setPhoto(false);
              setComment(false);
            }}
          >
            Gestion des résidents
          </button>
          <button
            className="bg-[#4c7d48] p-2 rounded-2xl text-white"
            onClick={() => {
              setPhoto(true);
              setResident(false);
              setUser(false);
              setComment(false);
            }}
          >
            Gestion des photos
          </button>
          <button
            className="bg-[#4c7d48] p-2 rounded-2xl text-white"
            onClick={() => {
              setComment(true);
              setUser(false);
              setResident(false);
              setPhoto(false);
            }}
          >
            Gestion des commentaires
          </button>
        </div>
        {user === true ? <UserAdmin /> : <></>}
        {resident === true ? <ResidentAdmin /> : <></>}
        {photo === true ? <PicturesAdmin /> : <></>}
        {comment === true ? <CommentAdmin /> : <></>}
      </>
    );
  } else {
    return (
      <div className="flex flex-col h-screen justify-center">
        <h3 className="text-center text-6xl">ERROR 404</h3>
        <p className="text-center">Cette page n'existe pas!</p>
      </div>
    );
  }
};

export default UserManagement;
