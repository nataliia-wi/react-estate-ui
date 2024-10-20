import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
	return (
		<div className="register">
			<div className="formContainer">
				<form>
					<h1>Create an Account</h1>
					<input name="username" type="text" placeholder="Username" />
					<input name="email" type="text" placeholder="Email" />
					<input name="password" type="password" placeholder="Password" />
					<button >Register</button>
					<Link to={`${import.meta.env.BASE_URL}/login`}>Do you have an account?</Link>
				</form>
			</div>
			<div className="imgContainer">
				<img src={`${import.meta.env.BASE_URL}/bg.png`} alt="" />
			</div>
		</div>
	);
}

export default Register;