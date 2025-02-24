import {Link} from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import { deletePost, getUserPosts } from "../../controllers/postsController"
import { UserContext } from "../../context/UserContext"
import Post from '../../components/Post';
import Alert from '../../components/Alert';
import Success from '../../components/Success';


const Dashboard = () => {

  // use user context
  const {user, setUser} = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  // error state
  const [error, setError] = useState(null);

  // success state
  const [success, setSuccess] = useState(null);

  useEffect(() => {

    setTimeout(async () => {
      const {userPosts, email} = await getUserPosts();

      setUser({ email, posts: userPosts});
      setLoading(false)
    }, 500)

  }, [])

  // delete posts
  const handleDelete = async(_id) => {
    
    if (confirm("Confirm delete{")) {
      try {
        const data = await deletePost(_id)
        setSuccess(data.success)
      } catch (error) {
        setError(error.message)
      }
  
      const newPosts = user.posts.filter((post) => post._id !== _id)
      setUser({...user, posts: newPosts});
    }
  }
  



  return (
    <section className="card">
      <p>{user.email}</p>
      <h1 className="title">User Dashboard</h1>

      {
        loading && (
            <i className="fa-solid fa-spinner animate-spin text-3xl text-center block"></i>
        )
      }

      {success && <Success msg={success} />}
      {error && <Alert msg={success} />}


      {
        user.posts && user.posts.map((post, index) => (
            <Post key={index} post={post}>
              <div className='flex items-center gap-2'>
                  <Link to="/update" state={post} title="Update" className="fa-solid fa-pen-to-square nav-link text-green-500 hover:bg-green-200"></Link>
                  <button onClick={() => handleDelete(post._id)} title='Delete' className='fa-solid fa-trash-can nav-link text-red-500 hover:bg-red-200'></button>
              </div>
            </Post>
        ))
      }

    </section>
  )
}

export default Dashboard