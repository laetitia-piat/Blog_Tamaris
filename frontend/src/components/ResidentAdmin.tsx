import { useGetAllResidentsQuery } from "../generated/graphql-types";

const ResidentAdmin = () => {
  const { data, loading, error } = useGetAllResidentsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Liste des résidents</h1>
      <table className="min-w-[90%] w border-collapse border border-[#4c7d48] bg-[#f7f0e1]">
        <thead>
          <tr>
            <th className="border border-[#4c7d48] p-2">ID</th>
            <th className="border border-[#4c7d48] p-2">Résident</th>
          </tr>
        </thead>
        <tbody>
          {data?.getAllResidents.map((resident: any) => (
            <tr key={resident.id}>
              <td className="border border-[#4c7d48] p-2">{resident.id}</td>
              <td className="border border-[#4c7d48] p-2">{resident.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ResidentAdmin;
