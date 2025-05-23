import { useNavigate } from "react-router-dom";
import {
  LoginUserInput,
  useGetUserInfoQuery,
  useLoginMutation,
} from "../generated/graphql-types";
import { SubmitHandler, useForm } from "react-hook-form";
//import { GET_USER_INFOS } from "../graphql/queries";

const UserManagement = () => {
  const navigate = useNavigate();
  const userInfos = useGetUserInfoQuery();
  const [login] = useLoginMutation({
    //refetchQueries: [{ }],
  });

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
  if (userInfos.data?.getUserInfo.role === "SUPERADMIN") {
    return (
      <>
        <h1 className="text-center text-3xl text-[#4c7d48] font-bold mt-20">
          Gestion des utilisateurs
        </h1>
        <form
          className="flex flex-col border-2 rounded-lg w-1/3 m-auto mt-50 pt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="mb-10 w-1/2 m-auto"
            placeholder="userName"
            {...register("userName", { required: true })}
          />
          {errors.password && <span>This field is required</span>}

          <input
            className="mb-10 w-1/2 m-auto"
            placeholder="password"
            type="password"
            {...register("password", { required: true })}
          />

          {errors.password && <span>This field is required</span>}
          <input
            className="bg-[#4c7d48] p-2 w-32 m-auto rounded-full text-white"
            type="submit"
          ></input>

          <a className="mt-5 text-center" href="register">
            Pas encore inscrit?
          </a>
          {/* <a className="linkSubscribe" href="forgotPassword">
            Mot de passe oublié?
          </a> */}
        </form>
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
