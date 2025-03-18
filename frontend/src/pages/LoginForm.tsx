import { useNavigate } from "react-router-dom";
import { LoginUserInput, useLoginMutation } from "../generated/graphql-types";
import { SubmitHandler, useForm } from "react-hook-form";
import { GET_USER_INFOS } from "../graphql/queries";

const LoginForm = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation({
    refetchQueries: [{ query: GET_USER_INFOS }],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserInput>();
  const onSubmit: SubmitHandler<LoginUserInput> = (data) => {
    console.log(data);
    login({
      variables: { data: { email: data.email, password: data.password } },
      onCompleted: (result) => {
        localStorage.setItem("token", result.login);
        navigate("/");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Page de connexion</h1>
        <input placeholder="email" {...register("email", { required: true })} />
        {errors.password && <span>This field is required</span>}

        <input
          placeholder="password"
          type="password"
          {...register("password", { required: true })}
        />

        {errors.password && <span>This field is required</span>}
        <input type="submit"></input>
        <a className="linkSubscribe" href="register">
          Pas encore inscrit?
        </a>
        {/* <a className="linkSubscribe" href="forgotPassword">
            Mot de passe oublié?
          </a> */}
      </form>
    </>
  );
};

export default LoginForm;
