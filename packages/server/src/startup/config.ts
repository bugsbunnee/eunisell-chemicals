const requiredEnv = ['DATABASE_URL', 'JWT_SECRET', 'EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_USER', 'EMAIL_PASS', 'EMAIL_NAME'] as const;

const registerConfig = () => {
  const missing = requiredEnv.filter((key) => !Bun.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
};

export default registerConfig;
