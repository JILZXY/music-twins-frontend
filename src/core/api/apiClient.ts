export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://musictwinsback.resets.app/api/v1';

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  // Try to get token from cookies or localStorage if needed.
  // In a Next.js client component environment, the browser will automatically send cookies.
  // If the backend uses JWT in Auth Header, we could retrieve it from a zustand store here.
  // Let's assume the session token is handled via HttpOnly Cookies for security by the backend (typical Nest.js OAuth flow),
  // OR we can read it from localStorage if we decide to store it.
  
  // To be safe, we'll try to retrieve 'token' from localStorage if it exists
  let token = '';
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('access_token') || '';
  }

  const headers = new Headers(options.headers);
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  
  // Set default content type
  if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  // Include credentials so HttpOnly cookies are sent
  const config: RequestInit = {
    ...options,
    headers,
    credentials: 'omit',
  };
  config.credentials = 'include';

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    if (response.status === 401) {
      // Invalidate session if needed
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
      }
    }
    throw new Error(`API Error: ${response.statusText}`);
  }

  // Safely parse JSON or return null/text if empty
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
