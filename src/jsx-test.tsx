import { users } from "./_data.ts";
export const layout = "layouts/main.njk";

export default () => {
  return (
    <main>

      <div className="container mx-auto">
        <h1>I'm the default theme</h1>
        <h3>Users</h3>
        <ul>
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
      <a href="/">Take me home</a>
    </main>
  );
};
