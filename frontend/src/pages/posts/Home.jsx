import { useContext, useEffect, useState } from "react"
import { getPosts } from "../../controllers/postsController";
import { PostContext } from "../../context/PostContext";
import Post from "../../components/Post";


const Home = () => {

    // Get all posts
    const {posts, setPosts} = useContext(PostContext)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        setTimeout( async() => {
            const data = await getPosts()
            setPosts(data.posts)
            setLoading(false);
        }, 500);
        
    }, [])


  return (
    <section className="card">
        <h1 className="title">Latest post</h1>

        {
            loading && (
                <i className="fa-solid fa-spinner animate-spin text-3xl text-center block"></i>
            )
        }

        {
            posts && posts.map((post, index) => (
                <Post key={index} post={post} />
            ))
        }
    </section>
  )
}

export default Home