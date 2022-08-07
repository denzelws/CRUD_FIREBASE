

import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="flex flex-col items-center text-center h-screen">
      <h1 className='text-2xl font-bold mb-5 '>Entrar</h1>
      <p className='text-gray-400 mb-6'>Faça o login para poder utilizar o sistema</p>
      <form className="flex flex-col items-center max-w-[50%]" onSubmit={handleSubmit}>
        <label >
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!loading && <button className=' bg-emerald-300 py-2 mb-5 w-20 text-sm text-gray-800 rounded-xl'>Entrar</button>}
        {loading && (
          <button className=' bg-gray-50 py-2 mb-5 w-20 text-sm text-gray-800 rounded-xl' disabled>
            Aguarde...
          </button>
        )}
        {error && <p className='text-red-900 bg-red-200 p-1 rounded text-center'>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
