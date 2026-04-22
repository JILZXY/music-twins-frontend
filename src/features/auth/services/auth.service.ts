import { fetchWithAuth, API_BASE_URL } from '@/core/api/apiClient';
import { User } from '@/features/auth/types/auth.types';

export const AuthService = {
  loginWithSpotify: () => {
    // Redirect browser to backend Spotify OAuth endpoint
    if (typeof window !== 'undefined') {
      window.location.href = `${API_BASE_URL}/auth/spotify/login`;
    }
  },

  getProfile: (): Promise<User> => {
    return fetchWithAuth('/auth/me');
  },

  logout: (): Promise<void> => {
    return fetchWithAuth('/auth/logout', { method: 'POST' });
  }
};
