// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// components
import PostDetail from "../../components/PostDetail";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className="flex flex-col items-center text-center min-h-screen">
      <h1 className="text-xl font-bold mb-3">Resultados encontrados para: {search}</h1>
      <div>
      {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/">
              Voltar
            </Link>
          </>
        )}
       
      </div>
    </div>
  );
};

export default Search;
