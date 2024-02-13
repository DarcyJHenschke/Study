import { useEffect, useRef, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";
import userService, { User } from "./services/user-service";

const App = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const { request, cancel } = userService.getAllUsers();
        request
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => cancel();
    }, []);

    const deleteUser = (user: User) => {
        const originalUsers = [...users];
        setUsers(users.filter((u) => u.id === user.id));

        userService.deleteUser(user.id).catch((err) => {
            setError(err.message);
            setUsers(originalUsers);
        });
    };

    return (
        <>
            {isLoading && <p>loading</p>}
            {error && <p className="text-danger">{error}</p>}
            <ul>
                {users.map((user) => (
                    <div key={user.id}>
                        <li>{user.name}</li>
                        <button
                            onClick={() => deleteUser(user.id)}
                            className="btn btn-secondary"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </ul>
        </>
    );
};

export default App;
