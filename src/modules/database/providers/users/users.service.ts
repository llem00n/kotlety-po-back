import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private repository: Repository<User>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(User);
  }

  async getByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }
}
