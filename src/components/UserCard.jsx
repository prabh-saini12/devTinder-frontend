const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;

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
            <button className="btn btn-primary px-4 py-2">Ignore</button>
            <button className="btn btn-secondary px-4 py-2">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
