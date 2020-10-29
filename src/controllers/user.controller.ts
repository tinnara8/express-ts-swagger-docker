// import {Pool} from 'pg';
// const db = Pool({
//     host: 'localhost',
//     user: 'postgres',
//     password: '112113114',
//     database: 'postgres',
//     port: '5433',
// });


// export async function getAllUsers() {
//   return await db.query(`SELECT * FROM users;`);
// }
// export async function getUserById(userId) {
//   return (await db.query(`
//     SELECT * FROM users WHERE user_id=${userId}
//   `))[0];
// }
// export async function createUser(u) {
//   return (await db.query(`
//     INSERT INTO users (name, email)
//     VALUES (${u.name}, ${u.email})
//     RETURNING user_id;
//   `))[0].user_id;
// }
// export async function deleteUserById(userId) {
//   await db.query(`DELELTE FROM users WHERE user_id=${userId}`);
// }
// export async function updateUserById(userId, u) {
//   await db.query(`
//     UPDATE users
//     SET name=${u.name}, email=${u.email}
//     WHERE user_id=${userId}
//   `);
// }
// export async function upsertUser(userId, u) {
//   return (await db.query(`
//     INSERT INTO users (user_id, name, email)
//     VALUES (${userId}, ${u.name}, ${u.email})
//     ON CONFLICT (user_id)
//     DO UPDATE SET name=${u.name}, email={u.email}
//     RETURNING *;
//   `))[0];
// }
