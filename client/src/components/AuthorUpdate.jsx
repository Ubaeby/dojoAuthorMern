import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const AuthorUpdate = props => {

    const {id} = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setName(res.data.name)
            })
            .catch(err => console.log(err))
    }, [])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, {name})
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                const errorRes = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorRes)) {
                    errorArr.push(errorRes[key].message)
                }
                setErrors(errorArr);
            })
    }


    return (
        <>
        <Link to={"/"}>Home</Link>
        <p>Edit this author</p>
        {
            errors.length > 0 && errors.map( (e, i) => (
                <p key={i}>{e}</p>
            ))
        }

        <form onSubmit={onSubmitHandler} >
            <label>Name: </label>
            <input type="text" value={name || ''} onChange={ e => setName(e.target.value)} />
            <Link to={"/"}>Cancel</Link>
            <button>Submit</button>
        </form>
        </>
    )
}

export default AuthorUpdate;