import React from "react";
import "./index.css";

interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface IProps {
  user: IUser;
}

const Card: React.FC<IProps> = ({ user }: IProps) => {
  return (
    <div className="card">
      <div className="card--img">
        <img src={user.avatar} alt="" />
      </div>
      <div className="card--info">
        <h1 className="card--title">{`${user.first_name} ${user.last_name}`}</h1>
        <a href={`mailto:${user.email}`} className="card--email">
          {user.email}
        </a>
      </div>
    </div>
  );
};

export default Card;
