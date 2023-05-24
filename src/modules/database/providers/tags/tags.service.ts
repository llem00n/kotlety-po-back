import { Injectable } from "@nestjs/common";
import { Tag } from "src/models/tag.model";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class TagsService {
    private repository: Repository<Tag>;

    constructor(dataSource: DataSource) {
      this.repository = dataSource.getRepository(Tag);
    }

    async getByName(name: string) {
        return await this.repository.findOneBy({ name })
    }

}