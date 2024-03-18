import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const routes = [];

routes.push({
  to: "/",
  text: "Home",
  private: false,
});
routes.push({
  to: "/blog",
  text: "Blog",
  private: false,
});
routes.push({
  to: "/profile",
  text: "Profile",
  private: true,
});
routes.push({
  to: "/login",
  text: "Login",
  private: true,
  publicOnly: true,
});
routes.push({
  to: "/Logout",
  text: "Logout",
  private: false,
});

let currentStyle = (isActive) => ({
  color: isActive ? "red" : "green",
});

export const Menu = () => {
  const auth = useAuth();
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
        {routes.map((route, index) => {
          if (route?.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;
          return (
            <li key={index}>
              <NavLink
                style={({ isActive }) => currentStyle(isActive)}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
