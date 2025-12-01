import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navPath = [
    // { path: "/", element: "" },
    { path: "/", element: "home" },
    { path: "/auth", element: "auth" },
    { path: "/show_login", element: "show_login" },
    // { path: "/page_404", element: "page_404" },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "21px" }}>
      {navPath.length &&
        navPath.map((el, i) => {
          return (
            <NavLink
              style={{
                color: "#000",
                fontSize: "35px",
                textTransform: "capitalize",
                fontWeight: "900",
              }}
              to={el.path}
              end
              key={i}
            >
              {el.element}
            </NavLink>
          );
        })}
    </div>
  );
};
