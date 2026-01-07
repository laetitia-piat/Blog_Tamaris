import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "../generated/graphql-types";

const userAdmin = () => {
  const { loading, error, data } = useGetAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (data) {
    return (
      <div>
        <h2 className="text-center text-2xl text-[#4c7d48] font-bold mt-10">
          Liste des utilisateurs
        </h2>
        <table className="min-w-[50%] m-auto md:w-1/2 border-collapse border border-[#4c7d48] bg-[#f7f0e1]">
          <thead>
            <tr>
              <th className="border border-[#4c7d48] p-2">ID</th>
              <th className="border border-[#4c7d48] p-2">Nom d'utilisateur</th>
              <th className="border border-[#4c7d48] p-2">Rôle</th>
              <th className="border border-[#4c7d48] p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.getAllUsers.map((user) => (
              <tr key={user.id}>
                <td className="border border-[#4c7d48] p-2">{user.id}</td>
                <td className="border border-[#4c7d48] p-2">{user.userName}</td>
                <td className="border border-[#4c7d48] p-2">{user.role}</td>
                <td className="border border-[#4c7d48] p-2 flex justify-evenly">
                  <button className=" hover:cursor-pointer">
                    <img
                      src="/images/pencil.png"
                      alt="pencil"
                      className="w-4 h-4  lg:w-6 lg:h-6  m-auto"
                    />
                  </button>
                  <button
                    className=" hover:cursor-pointer"
                    onClick={() =>
                      deleteUser({ variables: { data: { userId: user.id } } })
                    }
                  >
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
  }
};

export default userAdmin;
