import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userAPI } from "../store/Services/UserService";
import { AlbumModal } from "./Album";
import { Button, Input, Spin } from "antd";

export const Users = () => {
  const [limitUsers, setLimitUsers] = useState<number>(5);
  const {
    data: users,
    isLoading,
    error,
  } = userAPI.useFetchAllUsersQuery(limitUsers);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = Number(e.target.value);
    if (input === 0) setLimitUsers(1);
    setLimitUsers(input);
  };
  return (
    <div>
      <Input
        style={{ width: "100px", margin: "10px" }}
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e)}
        value={limitUsers}
      />
      <span style={{ fontSize: "12px", opacity: ".5" }}>type limit user</span>
      {error && <div style={{ color: "red" }}>some error</div>}
      {isLoading && (
        <div>
          <Spin size={"large"} />
        </div>
      )}
      {users?.map((user, key) => {
        return (
          <div key={key} className="user">
            {user.id}. {user.name}
            <div>
              <Button type="link">
                <Link to={`/${user.id}`}>posts</Link>
              </Button>
              <AlbumModal userId={user.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
