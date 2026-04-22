export interface User {
  id: number | string;
  spotifyId: string;
  displayName: string;
  email: string | null;
  avatarUrl: string | null;
  username?: string; // retrocompatibility
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface AuthSession {
  user: User;
  token?: string;
}
