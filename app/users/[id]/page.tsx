import { FC } from "react"

type TypeUserPage = {
    params: { id: number }
}

const UserPage: FC<TypeUserPage> = ({ params: { id } }) => {
    return (
        <div>UserPage{id}</div>
    )
}

export default UserPage