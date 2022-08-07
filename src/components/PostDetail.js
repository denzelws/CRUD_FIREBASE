import { Link } from "react-router-dom";


const PostDetail = ({ post }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img className="max-w-xl" src={post.image} alt={post.title} />
      <h2 className="text-xl">{post.title}</h2>
      <p className="italic text-gray-400 text-sm mb-2"> por: {post.createdBy}</p>
      <div className="flex mb-2">
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span className="font-semibold">#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link 
      className="bg-white border border-current hover:bg-gray-100 py-1 px-5 rounded-md mb-4"
      to={`/posts/${post.id}`}>
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
