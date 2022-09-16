import React, { Component } from "react";
import './Table.css'

class Table extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="container">
        <div className="form" style={{display:"flex",justifyContent:"space-between"}}>
            <input type="text" placeholder="Add new item"/>
            <button>Add</button>
        </div>
        <table border={1} cellPadding={5} >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>1</td>
                <td>Ism</td>
                <td>Email</td>
                <td><button>edit</button>&nbsp;<button>delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
