import { useContext, useState } from "react";
import Alert from "../../components/Alert";
import { loginUser } from "../../controllers/usersController";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    // Use USER context
    const { setUser } = useContext(UserContext);
    
    // navigate hook
    const navigate = useNavigate();

    // Error state
    const [error, setError] = useState(null);

    // Form data state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle login form submission
    const hendleLogin = async (e) => {
        e.preventDefault();

        try {
            await loginUser(email, password);

            // update user context
            setUser({ email, posts: [] });

            // navigate to dashboard
            navigate('/dashboard');
        } catch (err) {
            // console.log(err);
            setError(err.message);
        }
        
    }


    return (
        <section className="card">
            <h1 className="title">Login to your account</h1>

            <form onSubmit={hendleLogin}>
                <input
                    type="email"
                    placeholder="Email Address"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="btn"
                    type="submit"
                >
                    Login
                </button>
            </form>


            { error && <Alert msg={error} /> }

        </section>
    )
}

export default Login