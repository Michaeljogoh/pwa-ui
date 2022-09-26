import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import { baseURL } from "../api/api";

const Read = () => {
  const [user, setUser] = useState([]); // user state

  // fetching blogs from API
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(baseURL);
        setUser(data.readUser);
        console.log(data.readUser);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`${baseURL}${id}`);
  };

  return (
    <>
     
      <table className="table">
        <tbody>
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Mail</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
         
        {
          user.map((users , i)=>{
             return(
              <tr key={i}>
                <td>{users.id}</td>
                <td>{users.firstname}</td>
                <td>{users.lastname}</td>
                <td>{users.mail}</td>
                <td>
                  <Link className="button-green" to={`/${users.id}`}>
                    Update
                  </Link>
                </td>
                <td>
                  {" "}
                  <button
                    className="button-danger"
                    onClick={() => deleteUser(users.id)}
                  >
                     Delete
                  </button>
                </td>
              </tr>
             )
          })
         }

        </tbody>
  </table>
    </>
  );
};

export default Read;
