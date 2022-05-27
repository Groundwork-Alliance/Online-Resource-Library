import React from "react";
import { Table } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function AllTests() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 65];
  let id = 1;
  let btn = {
    outline: "none",
    boxShadow: "none",
  };
  return (
    <div>
      <div className="bg-light p-2">
        <p className="h3" style={{ marginLeft: "4%", color: "#001d42" }}>
          Tests
        </p>
        <button className="btn btn-success" style={{ marginLeft: "4%" }}>
          Add new test
        </button>
      </div>
      {/* data table */}
      <div className="container" style={{ width: "90%" }}>
        <Table className="mt-3 rounded" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th> Test Name</th>
              <th className="" style={{ colspan: "2" }}>
                Question
              </th>
              <th>Option-1</th>
              <th>Option-2</th>
              <th>Option-3</th>
              <th>Option-4</th>
              <th>Answer</th>
              <th width={"200px"}>Options</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((e) => {
              return (
                <tr>
                  <td>{id++}</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <button className="btn" style={btn} title="Edit">
                          <AiOutlineEdit size={"25px"} />
                        </button>
                      </div>
                      <div className="col">
                        <button className="btn" style={btn} title="Delete">
                          <AiOutlineDelete size={"25px"} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
