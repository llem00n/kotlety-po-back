import { Injectable } from '@nestjs/common';
import { City } from 'src/models/city.model';
import { Sex } from 'src/models/sex.model';
import { Tag } from 'src/models/tag.model';
import { User } from 'src/models/user.model';
import { AuthSignUpDto } from 'src/modules/auth/controllers/auth/dto/signup.dto';
import { DataSource, Repository } from 'typeorm';
import { SexService } from '../sex/sex.service';
import { CitiesService } from '../cities/cities.service';
import { TagsService } from '../tags/tags.service';

@Injectable()
export class UsersService {
  private repository: Repository<User>;
  

  constructor(
    dataSource: DataSource,
    private sexService: SexService,
    private citiesService: CitiesService,
    private tagsService: TagsService) {
    this.repository = dataSource.getRepository(User);
  }

  async getByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }
  
  async addUser(signUpInfo: AuthSignUpDto){
    const sex = await this.sexService.getByName(signUpInfo.sex)
    const city = await this.citiesService.getByName(signUpInfo.city)
    const tags = await this.tagsService.getMultipleByName(signUpInfo.tags)
  
    const user = this.repository.create({
      birthDate: signUpInfo.birthDate,
      city, 
      email: signUpInfo.email,
      isDeleted: false,
      password: signUpInfo.password,
      preferredTags: tags,
      sex,
    })
    await this.repository.save(user)
  }
}
