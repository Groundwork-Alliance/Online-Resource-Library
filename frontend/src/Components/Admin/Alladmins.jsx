import React from "react";
import { Table } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function AllUsers() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 65];
  let id = 1;
  let btn = {
    outline: "none",
    boxShadow: "none",
  };

  let [allUSersData,setAllUsersData] = React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/alladmins")
      .then((res) => res.json())
      .then((data) => {
        setAllUsersData(data);
      });
  })

  const deleteUser = (e) => {
    const url = `http://localhost:8080/deleteuser`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: e.currentTarget.value,
      }),
    });
  };

  return (
    <div>
      <div className="bg-light p-2">
        <p className="h3" style={{ marginLeft: "4%", color: "#001d42" }}>
          All Admins
        </p>
      </div>
      <div className="container" style={{ width: "90%" }}>
        <Table className="mt-3 rounded" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th width={"200px"}>Options</th>
            </tr>
          </thead>
          {
            allUSersData.length !==0 ?
            <tbody>
            {allUSersData.map((e) => {
              return (
                <tr>
                  <td>{id++}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.role}</td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <button className="btn" style={btn} title="Edit" value={e.user_id}>
                          <AiOutlineEdit size={"25px"} />
                        </button>
                      </div>
                      <div className="col">
                        <button className="btn" style={btn} title="Delete" value={e.user_id} onClick={deleteUser}>
                          <AiOutlineDelete size={"25px"} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          :
          <tbody>
              <h4 style={{ color: "#001d42" }} className="p-2">
              No users are available currently!!
              </h4>
          </tbody>
          }
        </Table>
      </div>
    </div>
  );
}
