import { useContext, useState } from "react"
import { createPost } from "../../controllers/postsController";
import Alert from "../../components/Alert";
import { PostContext } from "../../context/PostContext";
import {useNavigate} from 'react-router-dom'

const Create = () => {

    const {posts, setPosts} = useContext(PostContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    // form data state
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const hanleCreate = async (e) => {
        e.preventDefault();

        try {
            // create new post
            const data = await createPost(title, body);

            // update post
            setPosts([...posts, data.post])

            // navigate
            navigate('/dashboard')
        } catch (error) {
            setError(error.message)
        }
    }


  return (
    <section className="card">
        <h1 className="title">Create new post</h1>

        <form onSubmit={hanleCreate}>
            <input 
                type="text" 
                placeholder="Post Title"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
            />

            <textarea
                rows={6}
                placeholder="Post Content"
                className="input"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>

            <button className="btn">Create</button>
        </form>

        { error && <Alert msg={error} /> }
    </section>
  )
}

export default Create