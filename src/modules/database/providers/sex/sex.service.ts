import { Injectable } from "@nestjs/common";
import { Sex } from "src/models/sex.model";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class SexService {
    private repository: Repository<Sex>;

    constructor(dataSource: DataSource) {
      this.repository = dataSource.getRepository(Sex);
    }

    async getByName(name: string) {
        return await this.repository.findOneBy({ name })
    }

}