import { Injectable } from '@nestjs/common';
import { City } from 'src/models/city.model';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CitiesService {
  private repository: Repository<City>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(City);
  }

  async getAll(){
    return await this.repository.find();
  }
  
  async add (name: string){
    const newCity = this.repository.create({name: name});
    await this.repository.save(newCity);
  }
}