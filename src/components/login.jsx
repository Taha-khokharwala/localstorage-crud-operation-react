import React, { Fragment, useState } from 'react';

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(1);

  const insertData = (event) => {
    event.preventDefault();
    const userId = id;
    setUsers([...users, { id: userId, email: emailValue, password: passwordValue }]);
    setEmailValue('');
    setPasswordValue('');
    setId(id + 1);

    localStorage.setItem(userId.toString(), JSON.stringify({email: emailValue, password: passwordValue }));
  };

  const updateData = (index) => {
  const { email, password, id } = users[index];

  localStorage.setItem(id.toString(), JSON.stringify({ email, password }));

  const newData = [...users];
  newData.splice(index, 1);
  setUsers(newData);

  setEmailValue(email);
  setPasswordValue(password);
  setId(id);
};

  const deleteData = (index) => {
    const { id } = users[index];
    const newData = [...users];
    newData.splice(index, 1);
    setUsers(newData);
    setId(id)
    localStorage.removeItem(id.toString());
  };

  return (
    <form onSubmit={insertData}>
      <Fragment>
        <label>Email: </label>
        <input
          type='email'
          value={emailValue}
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          required
          onChange={(e) => setEmailValue(e.target.value)}
        /><br/><br/>
        <label>Password: </label>
        <input
          type='password'
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        /><br/><br/>
        <button type='submit'>Submit</button><br/><br/>
        <table border={1}>
          <tbody>
            <tr>
              <td>ID</td>
              <td>Email</td>
              <td>Password</td>
              <td>Action</td>
            </tr>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button onClick={() => updateData(index)}>Update</button>
                  <button onClick={() => deleteData(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    </form>
  );
}

export default Login;
