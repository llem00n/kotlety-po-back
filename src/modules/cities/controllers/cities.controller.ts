import { Body, Controller, Get, Post } from '@nestjs/common';
import { CitiesService } from 'src/modules/database/providers/cities/cities.service';
import { CitiesAddPostDto } from '../dto/add.post.dto';


@Controller('Cities')
export class CitiesController {
    constructor(
        private citiesService: CitiesService
    ) { }

    @Get('all')
    async getAll() {
        return await this.citiesService.getAll();
    }

    @Post('add')
    async postAdd(@Body() addDto: CitiesAddPostDto) {
        await this.citiesService.add(addDto.name);
    }
}
