import { createNextConfig } from '@supabase/next.config';

export default createNextConfig({
  experimental: {
    appDir: true,
  },
});