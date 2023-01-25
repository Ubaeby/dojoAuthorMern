import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const AuthorForm = props => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', { name })
            .then(res => {
                console.log(res.data)
                navigate('/');
            })
            .catch(err => {
                console.log(err)
                const errorRes = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorRes)) {
                    errorArr.push(errorRes[key].message)
                }
                setErrors(errorArr)
            });

        setName("")
    }

    return (
        <>
            <Link to={"/"}>Home</Link>
            <p>Add a new author:</p>
            {
                errors.length > 0 && errors.map((e, i) => (
                    <p key={i}>{e}</p>
                ))
            }

            <form onSubmit={onSubmitHandler} >
                <label>Name: </label>
                <input type="text" value={name || ''} onChange={e => setName(e.target.value)} />
                <Link to={"/"}>Cancel</Link>
                <button>Submit</button>
            </form>
        </>

    )
}

export default AuthorForm;