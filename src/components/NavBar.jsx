import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="navbar bg-white shadow-md">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl text-pink-600">
            devTinder
          </Link>
        </div>

        {user && (
          <div className="flex-none gap-2">
            <div className="form-control">Welcome, {user.firstName}</div>
            <div className="dropdown dropdown-end mx-5 flex ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="user photo" src={user.photoUrl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
              >
                <li>
                  <Link to="/profile" className="justify-between text-pink-600">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-pink-600">
                    Settings
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-pink-600">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
