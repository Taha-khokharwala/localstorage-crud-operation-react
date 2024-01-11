import React, { useState } from 'react';

const Appps = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tableData, setTableData] = useState([]);

  const insertData = (e) => {
    e.preventDefault();
    const newTableData = [...tableData, { email, password }];
    setTableData(newTableData);
    setEmail('');
    setPassword('');
  };

  const updateData = (index) => {
    const { email, password } = tableData[index];

    setEmail(email);
    setPassword(password);


    const newTableData = [...tableData];
    newTableData.splice(index, 1);
    setTableData(newTableData);
  };

  const deleteData = (index) => {
    const newTableData = [...tableData];
    newTableData.splice(index, 1);
    setTableData(newTableData);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={insertData} id="dataForm">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/><br/>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/><br/>

        <button type="submit">Submit</button>
      </form>

      <h2>User Table</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.email}</td>
              <td>{entry.password}</td>
              <td>
                <button onClick={() => updateData(index)}>Update</button>
                <button onClick={() => deleteData(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appps;