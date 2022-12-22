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
    setLimitUsers(Number(e.target.value));
  };
  return (
    <div>
      <Input
        style={{ width: "100px", margin: "10px" }}
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e)}
        value={limitUsers}
      />
      <span style={{ fontSize: "12px", opacity: ".5", }}>
        type limit user
      </span>
      {error && <div>some error</div>}
      {isLoading && <Spin size={"large"} />}
      {users?.map((user, key) => {
        return (
          <div
            key={key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
              margin: "10px",
              border: "1px solid #e3cfcf",
              fontSize: "12px",
            }}
          >
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
