import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
	const [open, setOpen] = useState(false);

	const user = true;
	return (
		<nav>
			<div className="left">
				<a href={`${import.meta.env.BASE_URL}/`} className="logo">
					<img src={`${import.meta.env.BASE_URL}/logo.png`} alt="" />
					<span>WOWEstate</span>
				</a>
				<a href={`${import.meta.env.BASE_URL}/list`}>List</a>
				<a href={`${import.meta.env.BASE_URL}/login`}>Login</a>
				<a href={`${import.meta.env.BASE_URL}/register`}>Register</a>
			</div>
			<div className="right">
				{user ? (
					<div className="user">
						<img
							src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt=""
						/>
						<span>Ben Stiller</span>
						<Link to="/profile" className="profile">
							<div className="notification">3</div>
							<span>Profile</span>
						</Link>
					</div>
				) : (
					<>
						<a href={`${import.meta.env.BASE_URL}/`}>Sign in</a>
						<a href={`${import.meta.env.BASE_URL}/`} className="register">
							Sign up
						</a>
					</>
				)}
				<div className="menuIcon">
					<img
						src={`${import.meta.env.BASE_URL}/menu.png`}
						alt=""
						onClick={() => setOpen((prev) => !prev)}
					/>
				</div>
				<div className={open ? "menu active" : "menu"}>
					<a href={`${import.meta.env.BASE_URL}/list`}>List</a>
					<a href={`${import.meta.env.BASE_URL}/login`}>Login</a>
					<a href={`${import.meta.env.BASE_URL}/register`}>Register</a>
					<a href={`${import.meta.env.BASE_URL}/`}>Sign in</a>
					<a href={`${import.meta.env.BASE_URL}/`}>Sign up</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;