import { useContext } from "react"
import { Context } from '../../context'
import UserRoute from "../../components/routes/UserRoute"

const UserIndex = () => {
  const { state } = useContext(Context);
  const { user } = state;

  return (
    <UserRoute>
      <div className="header">
        <h1>User profile</h1>
        <p>{JSON.stringify(user)}</p>
      </div>
    </UserRoute>
  );
}

export default UserIndex;