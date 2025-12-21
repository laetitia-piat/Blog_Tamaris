import { useGetAllUsersQuery } from "../generated/graphql-types";

const userAdmin = () => {
  const { loading, error, data } = useGetAllUsersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="w-[70%] m-auto">
      <h2 className="text-center text-2xl text-[#4c7d48] font-bold mt-10">
        Liste des utilisateurs
      </h2>
      <table className="min-w-[90%] md:w-1/2 border-collapse border border-[#4c7d48] bg-[#f7f0e1]">
        <thead>
          <tr>
            <th className="border border-[#4c7d48] p-2">ID</th>
            <th className="border border-[#4c7d48] p-2">Nom d'utilisateur</th>
            <th className="border border-[#4c7d48] p-2">Rôle</th>
          </tr>
        </thead>
        <tbody>
          {data?.getAllUsers.map((user) => (
            <tr key={user.id}>
              <td className="border border-[#4c7d48] p-2">{user.id}</td>
              <td className="border border-[#4c7d48] p-2">{user.userName}</td>
              <td className="border border-[#4c7d48] p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default userAdmin;
