import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
	const [open, setOpen] = useState(false);

	const user = true;
	return (
		<nav>
			<div className="left">
				<a href="/" className="logo">
					<img src="/logo.png" alt="" />
					<span>WOWEstate</span>
				</a>
				<a href="/list">List</a>
				<a href="/login">Login</a>
				<a href="/register">Register</a>
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
						<a href="/">Sign in</a>
						<a href="/" className="register">
							Sign up
						</a>
					</>
				)}
				<div className="menuIcon">
					<img
						src="/menu.png"
						alt=""
						onClick={() => setOpen((prev) => !prev)}
					/>
				</div>
				<div className={open ? "menu active" : "menu"}>
					<a href="/">List</a>
					<a href="/login">Login</a>
					<a href="/register">Register</a>
					<a href="/">Sign in</a>
					<a href="/">Sign up</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;