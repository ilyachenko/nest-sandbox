import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    create(createUserInput: CreateUserInput): Promise<User> {
        const { name } = createUserInput;
        const user = this.userRepository.create({ name, id: uuidv4() });
        return this.userRepository.save(user);
    }

    findAll() {
        return `This action returns all user`;
    }

    findOne(id: string) {
        return this.userRepository.findOne({ id });
    }

    update(id: number, updateUserInput: UpdateUserInput) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
