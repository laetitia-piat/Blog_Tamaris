import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useCreateNewPostMutation,
  useGetAllResidentsQuery,
} from "../generated/graphql-types";
import { GET_ALL_POSTS } from "../graphql/queries";
import axios from "axios";
import { Fragment } from "react/jsx-runtime";

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
    setValue,
    formState: {},
  } = useForm<Inputs>({
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const dataForBackend = {
      titre: data.titre,
      photo: data.photo,
      residents: data.residents.map((id) => ({ id: Number(id) })),
    };
    console.log(dataForBackend);
    await createNewPost({ variables: { data: dataForBackend } });
    toast.success("Succès !");
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

        <label className="text-xl mt-5 mb-3 text-center text-[#851e1e] font-bold">
          Photo
        </label>
        <input
          id="file"
          type="file"
          className="text-field"
          onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
              const formData = new FormData();
              formData.append("file", e.target.files[0]);
              try {
                const result = await axios.post("/img", formData);
                console.log("result data", result.data);
                setValue(
                  "photo",
                  (result.data as { filename: string }).filename
                );
              } catch (error) {
                console.error(error);
              }
            }
          }}
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
