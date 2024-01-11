import React, { Fragment , useState } from 'react';

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [users, setUsers] = useState([]);


  const insertData = (event) => {
    event.preventDefault();
    setUsers([...users, { email: emailValue, password: passwordValue }]);
    setEmailValue('')
    setPasswordValue('')

    localStorage.setItem(emailValue , passwordValue)
  };

  

  const updateData = (index) => {
    const { email, password } = users[index];
    setEmailValue(email);
    setPasswordValue(password);
    const newData = [...users];
    newData.splice(index, 1);
    setUsers(newData);

    localStorage.store = email
    localStorage.store = password
    localStorage.removeItem(email);
};

  const deleteData = (index) => {
    const newData = [...users]
    newData.splice(index ,1)
    setUsers(newData);
    localStorage.clear();
  }


  return (
    <form onSubmit={insertData}>
      <Fragment>
        <label>Email: </label>
        <input
          type='text'
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
              <td>email</td>
              <td>Password</td>
              <td>Action</td>
            </tr>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                <button onClick={() => updateData(index)}>update</button>
                <button onClick={() => deleteData(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    </form>
  );
}

export default Login;