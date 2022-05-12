const app = require("./app/index");

const { APP_PORT } = require("./config/config.default.js");

app.listen(APP_PORT, () => {
  console.log(`Server is running at http://localhost:${APP_PORT}`);
});
