// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";

// react
import { useState } from "react";

// components
import PostDetail from "../../components/PostDetail";

const Feed = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  console.log(loading);
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className='text-xl font-bold mb-5 '>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <input
          className=" mb-5"
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-black text-white py-2 px-3 hover:bg-white hover:text-black">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create">
              Criar primeiro post
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export default Feed
