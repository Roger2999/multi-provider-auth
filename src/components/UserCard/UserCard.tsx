import type { User } from "../../services/type";

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  return (
    <li>
      <div className="user-name">{user.name.first}</div>
      <div className="user-img">
        <img src={user.picture.medium} alt={user.name.first} />
      </div>
    </li>
  );
};
