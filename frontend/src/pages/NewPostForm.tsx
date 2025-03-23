import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useCreateNewPostMutation,
  useGetAllResidentsQuery,
} from "../generated/graphql-types";
import { GET_ALL_POSTS } from "../graphql/queries";

const NewPostForm = () => {
  const [createNewPost] = useCreateNewPostMutation({
    refetchQueries: [GET_ALL_POSTS],
  });
  const { error, loading, data } = useGetAllResidentsQuery();
  const navigate = useNavigate();
  type Inputs = {
    titre: string;
    photo: string;
    residents: { id: number }[];
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const dataForBackend = {
      ...data,
      residents: data.residents.map((id) => ({ id: Number(id) })),
    };
    console.log(dataForBackend);
    await createNewPost({ variables: { data: dataForBackend } });
    toast.success("Succes");
    navigate("/");
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 m-auto flex flex-col items-center"
      >
        <>
          <label className="text-xl mt-5 mb-3 text-[#851e1e] font-bold">
            Titre de la photo
          </label>
          <input
            className="border-1 border-solid h-10"
            {...register("titre", {
              minLength: { value: 2, message: "Minimum 2 characters" },
              required: "This field is required",
            })}
          />
          {/* <ErrorMessage
          errors={errors}
          name="titre"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => {
              console.log(message);
              return (
                <Fragment key={type}>
                  <br />
                  <span className="error-message">{message}</span>
                </Fragment>
              );
            })
          }
        /> */}
        </>
        <div className="w-1/2 mt-5 text-center flex flex-col">
          <label className="text-xl mt-5 mb-3 text-[#851e1e] font-bold">
            Choisissez les résidents :
          </label>
          <div className="flex flex-wrap justify-center ">
            {data.getAllResidents.map((resident) => (
              <label className="pr-2 pl-2" key={resident.id}>
                <input
                  type="checkbox"
                  value={resident.id}
                  {...register("residents")}
                />
                {resident.prenom}
              </label>
            ))}
          </div>
        </div>
        {/* 
        <label>Prénom du résident</label>
        <br />
        <select className="border-1 border-solid" {...register("residents")}>
          {data.getAllResidents.map((resident) => (
            <option key={resident.id} value={resident.id}>
              {resident.prenom}
            </option>
          ))}
        </select> */}

        <label className="text-xl mt-5 mb-3 text-center text-[#851e1e] font-bold">
          Photo
        </label>

        <input
          className="border-1 border-solid h-10"
          {...register("photo", {
            minLength: { value: 2, message: "Minimum 2 characters" },
            required: "This field is required",
          })}
        />
        <input
          className="bg-[#4c7d48] w-32 p-2 mt-15 rounded-full text-white"
          type="submit"
        />
      </form>
    );
  }
};
export default NewPostForm;
