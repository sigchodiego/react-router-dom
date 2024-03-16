import { Link, NavLink } from "react-router-dom";

const routes = [];

routes.push({
  to: "/",
  text: "Home",
});
routes.push({
  to: "/blog",
  text: "Blog",
});
routes.push({
  to: "/profile",
  text: "Profile",
});
routes.push({
  to: "/login",
  text: "Login",
});
routes.push({
  to: "/Logout",
  text: "Logout",
});

let currentStyle = (isActive) => ({
  color: isActive ? "red" : "green",
});

export const Menu = () => {
  return (
    // <nav>
    //   <li>
    //     {/* <a href="/">Home</a> */}
    //     {/* <Link to="/">Home</Link> */}
    //     <NavLink
    //       className={({ isActive }) => (isActive ? "aquitoy" : "")}
    //       style={currentStyle()}
    //       to="/"
    //     >
    //       Home
    //     </NavLink>
    //   </li>
    //   <li>
    //     {/* <a href="/#/blog">Blog</a> */}
    //     {/* <Link to="/blog">Blog</Link> */}
    //     <NavLink
    //       className={({ isActive }) => (isActive ? "aquitoy" : "")}
    //       style={({ isActive }) => ({
    //         color: isActive ? "red" : "green",
    //       })}
    //       to="/blog"
    //     >
    //       Blog
    //     </NavLink>
    //   </li>
    //   <li>
    //     {/* <a href="/#/profile">Profile</a> */}
    //     {/* <Link to="/profile">Profile</Link> */}
    //     <NavLink
    //       className={({ isActive }) => (isActive ? "aquitoy" : "")}
    //       style={({ isActive }) => ({
    //         color: isActive ? "red" : "green",
    //       })}
    //       to="/profile"
    //     >
    //       Profile
    //     </NavLink>
    //   </li>
    // </nav>
    <nav>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink
              style={({ isActive }) => currentStyle(isActive)}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
