import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UserDetails = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(users);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://user-management-system-server-5ss1zr9va-jillurs-projects.vercel.app/newUsers/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const usersRemaining = users.filter((user) => user._id !== _id);
              setUsers(usersRemaining);
    
              console.log(usersRemaining);
            }
            console.log(data);
          });
      }
    });
   
  };

  return (
    <div>
      <h2 className="text-3xl text-center mt-7">User Details: {users.length}</h2>
      <div className="max-w-screen-2xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-pink-700">
                {/* <th></th> */}
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr key={user._id}>
                  {/* <th>1</th> */}
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.radiomf}</td>
                  <td>{user.radioai}</td>
                  <div className="btn-group">
                    <Link to={`/editUser/${user._id}`}>
                      {" "}
                      <button className="btn btn-active">Edit</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn"
                    >
                      X
                    </button>
                  </div>
                </tr>
              ))}
              {/* <div className="btn-group">
  <button className="btn btn-active">Button</button>
  <button className="btn">Button</button>
  <button className="btn">Button</button>
</div> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
