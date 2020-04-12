import {Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, DataType, AutoIncrement} from 'sequelize-typescript';
import {NewsCorp} from "./NewsCorp";
import {VERSION} from "ts-node";

@Table({ underscored: true })
export default class News extends Model<News> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column({ unique: true })
    keyword: string;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}


