import { Link, NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    url: "/analytics",
    name: "Analytics",
  },
  {
    id: 2,
    url: "/resources",
    name: "Resources",
  },
  {
    id: 2,
    url: "/payment",
    name: "Payment",
  },
];

function Header() {
  return (
    <div className="p-5 bg-slate-50">
      <div className=" max-w-7xl mx-auto flex items-center gap-5">
        <div>
          <Link to={"/"}>
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Link>
        </div>

        <div>
          <ul className="flex gap-5">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) => (isActive ? "font-medium" : "")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
