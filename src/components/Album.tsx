import React, { useState } from "react";
import { Button, Modal } from "antd";
import { albumAPI } from "../store/Services/AlbumService";

interface IProps {
  userId: number;
}
export const AlbumModal: React.FC<IProps> = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: albums,
    isLoading,
    error,
  } = albumAPI.useFetchAlbumsByIdQuery(userId);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="default" onClick={showModal}>
        albums
      </Button>
      <Modal
        title="Albums"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {isLoading && <div>"loading..."</div>}
        {error && <div>some error</div>}
        userId - {userId}
        {albums?.map((item) => {
          return (
            <div>
              {item.id}. {item.title}
            </div>
          );
        })}
      </Modal>
    </>
  );
};
