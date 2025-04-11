import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {User} from "@/pages/users/types.ts";
import {useUsers} from "@/pages/users/useUsers.ts";

export const UsersPage = () => {
    const {email, setEmail, users, handleSubmit} = useUsers();

    return (
        <div>
            <h1 className="text-3xl font-bold">Users</h1>
            <div>
                <form className="flex gap-2" onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type="submit">Add</Button>
                </form>
            </div>
            <div className="flex flex-col">
                {users.map((user: User) => (
                    <div className="border p-2 rounded bg-gray-100">
                        {user.email}
                    </div>
                ))}
            </div>
        </div>
    )
}