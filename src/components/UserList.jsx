import { useContext } from "react";
import { InfoContext } from "../context/Provider";
function UserList() {
  const { user } = useContext(InfoContext);
  //   console.log(result);
  return (
    <div>
      {user.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default UserList;
