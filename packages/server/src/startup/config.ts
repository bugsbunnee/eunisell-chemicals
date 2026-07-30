const requiredEnv = ['DATABASE_URL', 'JWT_SECRET', 'RESEND_API_KEY'] as const;

const registerConfig = () => {
  const missing = requiredEnv.filter((key) => !Bun.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
};

export default registerConfig;
