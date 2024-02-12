import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface User {
    id: number;
    name: string;
}

const App = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get<User[]>(
                "https://jsonplaceholder.typicode.com/usersx",
            );
            setUsers(res.data);
        };
    }, []);
    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <ul>
                {users.map((user) => (
                    <li>{user.name}</li>
                ))}
            </ul>
        </>
    );
};

export default App;
