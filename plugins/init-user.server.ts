import { useUserStore } from '@/stores/user';
import Cookie from 'cookie';

export default defineNuxtPlugin(async (nuxtApp) => {
  const req = nuxtApp.ssrContext?.event?.req;
  if (!req) return;

  const cookies = Cookie.parse(req.headers.cookie || '');
  const token = cookies['token'] || '';

  if (token) {
    const userStore = useUserStore();
    await userStore.load(token);
  }
});
