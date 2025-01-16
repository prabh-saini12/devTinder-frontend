const NavBar = () => {
  return (
    <>
      <div className="navbar bg-white shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-pink-600">devTinder</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <a className="justify-between text-pink-600">
                  Profile
                  {/* <span className="badge text-white bg-pink-500">New</span> */}
                </a>
              </li>
              <li>
                <a className="text-pink-600">Settings</a>
              </li>
              <li>
                <a className="text-pink-600">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
