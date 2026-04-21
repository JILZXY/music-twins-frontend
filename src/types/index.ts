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

export interface Reaction {
  emoji: string;
  count: number;
  userReacted?: boolean;
}

export interface FeedItem {
  id: number;
  friend: string;
  title: string;
  artistAlbum: string;
  mood: string;
  timeAgo: string;
  reactions: Reaction[];
}

export interface MessageObj {
  id: string;
  senderId: number;
  text: string;
  timestamp: string;
  isMine?: boolean; // mapped locally
}

export interface Conversation {
  id: string;
  friendName: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  online?: boolean;
}
