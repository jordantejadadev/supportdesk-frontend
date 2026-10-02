import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md rounded-2xl shadow-md p-8"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">SupportDesk</h1>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg py-3 transition"
          >
            Iniciar sesión
          </button>
        </div>
        <p className="text-center text-sm text-zinc-600 mt-6">
          ¿No tienes una cuenta?{" "}
          <Link
            to="/register"
            className="font-medium text-zinc-900 hover:underline"
          >
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
