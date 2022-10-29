import { footer, navbar } from './index.js'

export const bootstrapComponents = (user) => {
  navbar(user);
  footer();
}