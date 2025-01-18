import { useContext, useState } from "react"
import { updaePost } from "../../controllers/postsController";
import Alert from "../../components/Alert";
import { PostContext } from "../../context/PostContext";
import {useLocation, useNavigate} from 'react-router-dom'

const Update = () => {

    const {posts, setPosts} = useContext(PostContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {state} = useLocation();

    

    // form data state
    const [title, setTitle] = useState(state.title);
    const [body, setBody] = useState(state.body);


    const hanleUpdate = async (e) => {
        e.preventDefault();

        try {
            // update new post
            const data = await updaePost(state._id, title, body);

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
        <h1 className="title">Update your post</h1>

        <form onSubmit={hanleUpdate}>
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

            <button className="btn">Update</button>
        </form>

        { error && <Alert msg={error} /> }
    </section>
  )
}

export default Update