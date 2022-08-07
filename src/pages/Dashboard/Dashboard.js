
import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  console.log(uid);
  console.log(posts);

  return (
    <div className="flex flex-col items-center text-center h-screen">
      <h2 className='text-2xl font-bold mb-5 '>Dashboard</h2>
      <p className='text-gray-400 mb-6'>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div >
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className="flex justify-between font-bold w-4/5 p-2 text-black border-b-2">
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

      {posts &&
        posts.map((post) => (
          <div 
          className="flex justify-between items-center w-4/5 p-2 border-b-2"
          key={post.id}>
            <p>{post.title}</p>
            <div className=" flex text-xs justify-center items-center ">
              <Link
              className="bg-white border border-current hover:bg-gray-100 py-1 px-4 mr-2 rounded-sm mb-2 mt-2 "
              to={`/posts/${post.id}`} >
                Ver
              </Link>
              <Link
              className="bg-white border border-current hover:bg-gray-100 py-1 px-4 mr-2 rounded-sm mb-2 mt-2"
              to={`/posts/edit/${post.id}`} >
                Editar
              </Link>
              <button
              className="bg-white border border-current hover:bg-red-600 hover:text-white py-1 px-4 mr-2 rounded-sm mb-2 mt-2"
                onClick={() => deleteDocument(post.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;