import { Body, Delete, Example, Get, Patch, Post, Route } from 'tsoa';
import { User, UserCreateRequest, UserUpdateRequest } from '../models/user';

@Route('Users')
export class UsersController {
  /** Get the current user */
  @Get('Current')
  @Example<User>({
    createdAt: new Date(),
    email: 'test@test.com',
    id: 1,
  })
  public async Current(): Promise<User> {
    return {
      createdAt: new Date(),
      email: 'test',
      id: 666,
    };
  }

  /** Get user by ID */
  @Get('{userId}')
  public async Get(userId: number): Promise<User> {
    return {
      createdAt: new Date(),
      email: 'test2',
      id: userId,
    };
  }

  /**
   * Create a user
   * @param request This is a user creation request description
   */
  @Post()
  public async Create(@Body() request: UserCreateRequest): Promise<User> {
    return {
      createdAt: new Date(),
      email: request.email,
      id: 666,
    };
  }

  /** Delete a user by ID */
  @Delete('{userId}')
  public async Delete(userId: number): Promise<void> {
    return Promise.resolve();
  }

  /** Update a user */
  @Patch()
  public async Update(@Body() request: UserUpdateRequest): Promise<User> {
    return {
      createdAt: request.createdAt,
      email: request.email,
      id: 1337,
    };
  }
}

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
