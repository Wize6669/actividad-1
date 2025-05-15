import { type ChangeEvent, type FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import type { User } from '../models/User.ts';
import { usersTable } from '../db.ts';
import bcrypt from 'bcryptjs';

export default function SignUpForm() {
    const navigate = useNavigate();
    const [user, setUser] = useState<Omit<User, "id">>({
        name: "",
        surname: "",
        email: "",
        password: "",
        roleId: 2,
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleGetDataInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");

        if (user.password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        const existingUser = usersTable.find((u: User) => u.email === user.email);
        if (existingUser) {
            setError("El correo electrónico ya está registrado");
            return;
        }

        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(user.password, salt);

            const newUser: User = {
                id: usersTable.length + 1,
                name: user.name,
                surname: user.surname,
                email: user.email.trim().toLowerCase(),
                password: hashedPassword,
                roleId: user.roleId
            };

            usersTable.push(newUser);

            setSuccess(true);
            setUser({
                name: "",
                surname: "",
                email: "",
                password: "",
                roleId: 2,
            });
            setConfirmPassword("");

            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setError("Error al registrar usuario");
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Crear cuenta</h2>

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        ¡Registro exitoso! Ya puedes iniciar sesión.
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleGetDataInput}
                                required
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Apellido</label>
                            <input
                                type="text"
                                name="surname"
                                value={user.surname}
                                onChange={handleGetDataInput}
                                required
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
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
                            value={user.password}
                            onChange={handleGetDataInput}
                            required
                            minLength={6}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                    >
                        Registrarse
                    </button>
                </form>

                <p className="mt-6 text-center text-sm">
                    ¿Ya tienes una cuenta?
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Iniciar sesión
                    </Link>
                </p>
            </div>
        </div>
    );
}