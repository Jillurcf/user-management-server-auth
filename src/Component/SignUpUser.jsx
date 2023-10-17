
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const SignUpUser = () => {
  const signUpUser = useLoaderData();
  const [users, setUsers] = useState(signUpUser)
  
  const handleDelete = id =>{
// make sure user is confirmed
    fetch(`https://user-management-system-server-5ss1zr9va-jillurs-projects.vercel.app/signupuser/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data=> {
      if(data.deletedCount > 0){
        alert('deleted')
        // remove the user form the UI
        const remaining = users.filter(us => us._id !== id)
        setUsers(remaining)
      }
    })
  }
  return (
    <div>
      <h2>Sign up user: {users.length}</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Password</th>
        <th>cratedAt</th>
        <th>last log in</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => <tr key={user._id}>
          <th>1</th>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.createdAt}</td>
          <td>{user.lastLoggedAt}</td>
          <td>
            <button onClick={()=> handleDelete(user._id)} className="btn">X</button>
          </td>
        </tr>)
      }
      
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default SignUpUser;
