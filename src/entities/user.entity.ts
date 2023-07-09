import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude, Expose, Transform } from "class-transformer";
interface Person {
  name: string;
  age: number;
}


@Entity("student")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Exclude()
  @Column()
  password: string;

  @Column("json", { nullable: true })
  obj: Person;

 
  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
