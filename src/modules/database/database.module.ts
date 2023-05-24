import { DynamicModule, Module, Provider } from '@nestjs/common';
import { UsersService } from './providers/users/users.service';
import { DataSource } from 'typeorm';
import { CitiesService } from './providers/cities/cities.service';
import { SexService } from './providers/sex/sex.service';
import { TagsService } from './providers/tags/tags.service';

type Providers = UsersService | CitiesService | SexService | TagsService;

@Module({
  providers: [UsersService, CitiesService, SexService, TagsService],
  exports: [UsersService, CitiesService, SexService, TagsService]
})
export class DatabaseModule {
  /**
   * Resolves Database module for given services
   * 
   * @see AuthModule as use example
   */
  static forFeature(...services: Provider<Providers>[]): DynamicModule {
    return {
      module: DatabaseModule,
      providers: services,
      exports: services,
    }
  }
}
