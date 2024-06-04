import app from "./src/app.js";
import { env } from "./src/utils/env.js";

const port = env.port || 5500;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
