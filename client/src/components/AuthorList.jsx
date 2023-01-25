import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";

const AuthorList = props => {
    const [aList, setAList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAList(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const removeAuthor = authorId => {
        setAList(aList.filter(a => a._id !== authorId))
        navigate('/')
    }

    return (
        <>
            <Link to={"/new"}>Add an author</Link>
            <p>We have quotes by:</p>

            <table className="table table-dark w-25 m-auto">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {aList.length > 0 && [...aList].sort((a, b) => a.name.localeCompare(b.name)).map((a, i) => {
                        return (
                            <tr key={i}>
                                <td>{a.name}</td>
                                <td>
                                    <Link to={`/edit/${a._id}`}>Edit</Link>
                                    <DeleteButton authorId={a._id} successCallBack = { () => removeAuthor(a._id)}  />
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default AuthorList;
