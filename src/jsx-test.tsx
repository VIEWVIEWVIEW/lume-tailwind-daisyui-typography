import { users } from "./_data.ts";


export default () => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
