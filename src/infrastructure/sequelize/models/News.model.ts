import {Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, DataType, AutoIncrement} from 'sequelize-typescript';
import {NewsCorp} from "./NewsCorp";
import {VERSION} from "ts-node";

@Table({ underscored: true })
export default class News extends Model<News> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column({ type: DataType.STRING })
    corporation: NewsCorp;

    @Column({ unique: true })
    title: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    content: string;

    @Column(DataType.TEXT({ length: 'medium' }))
    html: string;

    @Column
    reporter: string;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}


