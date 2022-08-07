
// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
    <div className="flex flex-col items-center text-center min-h-screen">
      {post && (
        <>
          <h1 className='text-xl font-bold mb-5 '>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p className='text-gray-600 mt-2 mb-3 max-w-1/2'>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className="flex mb-5">
            {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span className="font-semibold">#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;