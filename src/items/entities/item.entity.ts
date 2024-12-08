import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    public: boolean

    constructor(item: Partial<Item>) {
        Object.assign(this, item)
    }
}
