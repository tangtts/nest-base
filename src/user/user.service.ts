import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  createOne(user:UserDTO ){
    // let one = new User(user)
    // console.log(one)
    console.log(user,"user")
    let a = {
      ...user,
      obj:{
        name:"zs",
        age:20
      }
    }
    return this.usersRepository.save(a);
  };

  

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    console.log(id)
    return this.usersRepository.findOneBy({id:Number(id)});
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
