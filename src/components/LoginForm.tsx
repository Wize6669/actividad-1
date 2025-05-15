import { type ChangeEvent, type FormEvent, useState } from 'react';
import type { User, UserSignInClient } from '../models/User.ts';
import { usersTable } from '../db.ts';
import { Link, useNavigate } from 'react-router';
import bcrypt from 'bcryptjs';
import { userStoreClient } from '../stores/userStore.ts';

export default function LoginForm() {
    const [user, setUser] = useState<UserSignInClient>({
        email: '',
        password: '',
        roleId: 2,
    });
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const userStore = userStoreClient((state) => state);

    const handleGetDataInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));

    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const matchedUser = usersTable.find(
            (u: User) => u.email.trim().toLowerCase() === user.email.trim().toLowerCase()
        );

        if (matchedUser && bcrypt.compareSync(user.password, matchedUser.password)) {
            userStore.login({ ...matchedUser, isLogin: true });
            navigate('/');
        } else {
            console.log(matchedUser && bcrypt.compareSync(user.password, matchedUser.password))
            alert('Correo o contraseña incorrectos');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email}
                            onChange={handleGetDataInput}
                            required
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={user?.password}
                            onChange={handleGetDataInput}
                            required
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="mr-2"
                            />
                            Recordarme
                        </label>

                        <Link to="/auth/forgot-password" className="text-sm text-blue-500 hover:underline">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                    >
                        Iniciar sesión
                    </button>
                </form>

                <p className="mt-6 text-center text-sm">
                    ¿No tienes una cuenta?
                    <Link to="/auth/sign-up" className="text-blue-500 hover:underline">
                        Regístrate
                    </Link>
                </p>
            </div>
        </div>
    );
}