import { db } from "./db.js";

(async () => {
  const users = await db.execute("SELECT * FROM users");
  console.log(users.rows); // logs all rows
})();