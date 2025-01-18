import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      setError("Failed to load connections.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (loading) return <div className="text-center">Loading connections...</div>;

  if (error) return <div className="text-center text-red-500">{error}</div>;

  if (!connections || connections.length === 0) {
    return <h1 className="text-center text-white">No Connections Found</h1>;
  }

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-white text-3xl">Connections</h1>

      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          connection;

        return (
          <div
            key={_id}
            className="flex m-4 p-6 rounded-lg bg-white shadow-lg w-1/2 mx-auto transition-all duration-300 hover:scale-105"
          >
            <div>
              <img
                alt={`${firstName} ${lastName}'s profile`}
                className="w-20 h-20 rounded-full object-cover border-4 border-red-300"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl text-secondary">
                {firstName + " " + lastName}
              </h2>
              {age && gender && (
                <p className="text-sm text-accent mt-1">{`${age}, ${gender}`}</p>
              )}
              <p className="text-base text-base-700 mt-2">{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
