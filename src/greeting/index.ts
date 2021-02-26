import { success } from '@/utils/logger';

const sayGreeting = (name: string): void => {
  success(`hello ${name}, welcome!`);
};
export default sayGreeting;
