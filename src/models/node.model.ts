import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { database } from '../config/database';

export class Node extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
