export interface User {
  id: number;
  email?: string;
  username: string;
  spotifyId?: string;
  avatar?: string;
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
