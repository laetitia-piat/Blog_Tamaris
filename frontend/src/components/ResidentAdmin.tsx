import { useGetAllResidentsQuery } from "../generated/graphql-types";

const ResidentAdmin = () => {
  const { data, loading, error } = useGetAllResidentsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-center text-2xl text-[#4c7d48] font-bold mt-10">
        Liste des résidents
      </h2>
      <table className="min-w-[50%] m-auto w border-collapse border border-[#4c7d48] bg-[#f7f0e1]">
        <thead>
          <tr>
            <th className="border border-[#4c7d48] p-2">ID</th>
            <th className="border border-[#4c7d48] p-2">Résident</th>
            <th className="border border-[#4c7d48] p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.getAllResidents.map((resident: any) => (
            <tr key={resident.id}>
              <td className="border border-[#4c7d48] p-2">{resident.id}</td>
              <td className="border border-[#4c7d48] p-2">{resident.name}</td>
              <td className="border border-[#4c7d48] p-2 flex justify-evenly">
                <button className=" hover:cursor-pointer">
                  <img
                    src="/images/pencil.png"
                    alt="pencil"
                    className="w-4 h-4  lg:w-6 lg:h-6  m-auto"
                  />
                </button>
                <button className=" hover:cursor-pointer">
                  <img
                    src="/images/corbeille.png"
                    alt="corbeille"
                    className="w-4 h-4  lg:w-6 lg:h-6  m-auto"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ResidentAdmin;
