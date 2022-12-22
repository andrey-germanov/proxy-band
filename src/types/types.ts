export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IAlbum {
  id: number;
  userId: number;
  title: string;
}
