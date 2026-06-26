import 'dotenv/config';

import logger from './startup/logger.ts';
import registerApp from './startup/index.ts';

const app = registerApp();
const port = Number(Bun.env.PORT) || 8080;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});

export default app;
