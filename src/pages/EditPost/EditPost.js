
import { useEffect, useState } from "react";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useNavigate, useParams } from "react-router-dom";
import {useAuthValue} from '../../context/AuthContext'
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditPost = () => {
  const {id} = useParams()
  const {document:post} = useFetchDocument("posts",id)
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
      if (post) {
        setTitle(post.title)
        setBody(post.body)
        setImage(post.image)

        const textTags = post.tagsArray.join(", ")

        setTags(textTags)
      }
  },[post])

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { updateDocument, response } = useUpdateDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validar imagem URL
         try {
          new URL(image)
         } catch (error) {
          setFormError("A imagem precisa ser uma URL.")
         }
    // criar array de tags
      const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())   
 
     // checar valores
     if(!title || !image || !tags || !body) {
      setFormError("Por favor preencha todos os campos!")
     }
     
     if (formError) return
    
     const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    }

    updateDocument(id,data);

   // redirect to home page
   navigate("/dashboard")

  };

  return (
    <div className='flex flex-col items-center text-center'>
      {post && (
        <>
        <h2 className='text-2xl font-bold mb-5 '>Editar post: {post.title}</h2>
      <p className='text-gray-400 mb-6'>Altere os dados do post abaixo</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span className='text-gray-700 font-bold'>Título:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span className='text-gray-700 font-bold'>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <p className='text-gray-700 font-bold'>Preview da imagem atual:</p>
        <img 
        className="max-w-xs mb-2" 
        src={post.image} 
        alt={post.title} />
        <label>
          <span className='text-gray-700 font-bold'>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span className='text-gray-700 font-bold'>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className=' bg-emerald-300 py-2 mb-5 w-20 text-sm text-gray-800 rounded-xl'>Editar</button>}
        {response.loading && (
          <button className=' bg-gray-50 py-2 mb-5 w-20 text-sm text-gray-800 rounded-xl' disabled>
            Aguarde.. .
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className='text-red-900 bg-red-200 p-1 rounded text-center'>{formError}</p>}
       </form>
        </>
      )}
    </div>
  );
};

export default EditPost;