import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch()
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;

  const handleSendRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      console.log(res)
      dispatch(removeFeed(_id))
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex justify-center my-6">
      <div className="card bg-base-100 w-full max-w-sm shadow-md rounded-md overflow-hidden">
        <figure className="h-52 w-full overflow-hidden">
          <img
            src={photoUrl}
            alt="User"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-bold text-gray-700">
            {firstName + " " + lastName}
          </h2>
          {age && gender && (
            <p className="text-sm text-gray-600">{age + " years, " + gender}</p>
          )}
          <p className="text-sm text-gray-600 mt-2">{about}</p>
          <div className="card-actions flex justify-around mt-4">
            <button
              className="btn btn-primary px-4 py-2"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button className="btn btn-secondary px-4 py-2"  onClick={() => handleSendRequest("interested", _id)}>Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
