import { useContext, useState } from "react";
import Alert from "../../components/Alert";
import { registerUser } from "../../controllers/usersController";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";


const Register = () => {

    // Use user context
    const { setUser } = useContext(UserContext);

    // navigate hook
    const navigate = useNavigate();

    // Error state
    const [error, setError] = useState(null);

    // Form data state
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    });



    // Handle login form submission
    const hendleRegister = async (e) => {
        e.preventDefault();

        try {
            await registerUser(formData.email, formData.password, formData.passwordConfirm);
        
            // update user context
            setUser({ email: formData.email, posts: [] });
            // navigate to dashboard
            navigate('/dashboard');
        } catch (error) {
            setError(error.message);
        }
        
    }



    return (
        <section className="card">
            <h1 className="title">Create a new account</h1>

            <form onSubmit={hendleRegister}>
                <input
                    type="email"
                    placeholder="Email Address"
                    className="input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    autoFocus
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input"
                    value={formData.passwordConfirm}
                    onChange={(e) => setFormData({ ...formData, passwordConfirm: e.target.value })}
                />

                <button
                    className="btn"
                    type="submit"
                >
                    Register
                </button>
            </form>


            { error && <Alert msg={error} /> }

        </section>
    )
}

export default Register