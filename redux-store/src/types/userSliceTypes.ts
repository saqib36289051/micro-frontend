export type UserState = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  profilePicture: string;
};

export type UserWithToken = {
  token: string | null;
} & Partial<UserState>;
