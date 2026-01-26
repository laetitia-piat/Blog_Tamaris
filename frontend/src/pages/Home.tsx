import AllPictures from "../components/AllPictures";
import AllPicturesByResident from "../components/AllPicturesByResident";
import { GET_USER_INFOS } from "../graphql/queries";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import "@fontsource/quicksand";
import {
  LoginUserInput,
  useGetUserByUserNameQuery,
  useGetUserInfoQuery,
  useLoginMutation,
} from "../generated/graphql-types";

const HomePage = () => {
  const userInfos = useGetUserInfoQuery();
  const userName = userInfos.data?.getUserInfo.userName || "";

  const user = useGetUserByUserNameQuery({ variables: { userName } });
  const residentName = user.data?.getUserByUserName?.resident?.name;

  const navigate = useNavigate();
  const [login] = useLoginMutation({
    refetchQueries: [{ query: GET_USER_INFOS }],
  });

  const [screenAllPicturesByResident, setcreenAllPicturesByResident] =
    useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserInput>();
  const onSubmit: SubmitHandler<LoginUserInput> = (data) => {
    console.log(data);
    login({
      variables: { data: { userName: data.userName, password: data.password } },
      onCompleted: (result) => {
        localStorage.setItem("token", result.login);
        navigate("/");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  if (userInfos.data?.getUserInfo.isLoggedIn) {
    return (
      <>
        <div className="flex justify-evenly items-center bg-[#f7f0e1] mt-10 h-[60px]">
          <button
            className="bg-[#4c7d48] p-2 rounded-2xl text-white"
            onClick={() => {
              setcreenAllPicturesByResident(false);
            }}
          >
            Photos du foyer
          </button>
          {userInfos.data?.getUserInfo.role === "SUPERADMIN" ? (
            <Link to="/admin">
              <button className="bg-[#4c7d48] p-2 rounded-2xl text-white">
                Admin
              </button>
            </Link>
          ) : (
            <button
              className="bg-[#4c7d48] p-2 rounded-2xl text-white"
              onClick={() => {
                setcreenAllPicturesByResident(true);
              }}
            >
              Photos de {residentName}
            </button>
          )}
        </div>
        <div className="flex flex-col items-center w-[80%] m-auto h-screen ]">
          <div className="mt-10 mb-10">
            <Link to="/post/new">
              <button className="bg-[#4c7d48] p-2 rounded-2xl text-white">
                Publier une photo
              </button>
            </Link>
          </div>
          {!screenAllPicturesByResident ? <AllPictures /> : <></>}
          {screenAllPicturesByResident ? <AllPicturesByResident /> : <></>}
        </div>
      </>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className="font-quicksand text-4xl sm:text-5xl md:text-6xl text-[#3c5c39] font-bold pb-15 lg:pt-40">
          BLOG DES TAMARIS
        </h1>
        <form
          className="flex flex-col bg-[#ebe0cc] rounded-lg w-[75%] md:w-1/2 lg:w-1/3 lg:m-auto lg:mt-30 pt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="mb-10 w-[80%] lg:w-1/2 m-auto bg-[#dbd0b8] h-10 rounded-lg pl-5"
            placeholder="Identifiant"
            {...register("userName", { required: true })}
          />
          {errors.password && <span>This field is required</span>}

          <input
            className="mb-10 w-[80%] lg:w-1/2 m-auto bg-[#dbd0b8] h-10 rounded-lg pl-5"
            placeholder="Mot de passe"
            type="password"
            {...register("password", { required: true })}
          />

          {errors.password && <span>This field is required</span>}
          <input
            className="bg-[#4c7d48] p-2 w-32 m-auto rounded-full text-white mb-10"
            type="submit"
          ></input>

          {/* <a className="linkSubscribe" href="forgotPassword">
            Mot de passe oublié?
          </a> */}
        </form>
      </div>
    );
  }
};
export default HomePage;
