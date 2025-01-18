import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Request = () => {
  const requests = useSelector((store) => store.requests);
  console.log(requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );

      //   console.log(res);
      dispatch(removeRequest(_id));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(requests);
  const fetchRequest = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/recieved`, {
        withCredentials: true,
      });
      //   console.log(res.data.data);
      dispatch(addRequests(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);
  if (!requests) return;

  if (requests.length === 0)
    return <h1 className="flex justify-center my-10"> No Requests Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-black text-3xl mb-6">
        Connection Requests
      </h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;

        return (
          <div
            key={_id}
            className="flex flex-col sm:flex-row justify-between items-center m-4 p-6 rounded-lg bg-white shadow-lg mx-auto transition-all duration-300 hover:scale-105"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover border-4 border-secondary"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 sm:mx-6 mt-4 sm:mt-0">
              <h2 className="font-bold text-xl text-secondary">
                {firstName + " " + lastName}
              </h2>
              {age && gender && (
                <p className="text-sm text-accent mt-1">{`${age}, ${gender}`}</p>
              )}
              <p className="text-base text-base-700 mt-2">{about}</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:flex sm:items-center">
              <button
                className="btn btn-error mx-2 w-full sm:w-auto mb-2 sm:mb-0"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-success mx-2 w-full sm:w-auto"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
