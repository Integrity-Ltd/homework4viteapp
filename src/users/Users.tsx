import { useQuery } from '@tanstack/react-query'

export default function Users() {
    const getUsers = async () => {
        const res = await fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'no-cache'
        });
        let data: [] = [];
        if (res.ok) {
            data = await res.json();
        }
        return data;
    }

    const { data: usersData } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    })
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {usersData?.map((user: any) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    )
}
