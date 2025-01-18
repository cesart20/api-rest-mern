/************************Login USER **************** */

const loginUser = async (email, password) => {

    if (!email || !password) {
        throw Error('Please all fields are required');
    }

    const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if(!res.ok) {
        throw Error(data.message);
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('email', data.email);

    return data;
}


/************************Register USER **************** */
const registerUser = async (email, password, passwordConfirm) => {
    
    if (!email || !password || !passwordConfirm) {
        throw Error('Please all fields are required');
    }

    if (password !== passwordConfirm) {
        throw Error('Passwords do not match');
    }

    const res = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if(!res.ok) {
        throw Error(data.message);
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('email', data.email);

    return data;
}

export {
    loginUser,
    registerUser
}