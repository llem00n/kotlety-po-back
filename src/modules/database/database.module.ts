import { DynamicModule, Module, Provider } from '@nestjs/common';
import { UsersService } from './providers/users/users.service';
import { DataSource } from 'typeorm';
import { CitiesService } from './providers/cities/cities.service';

type Providers = UsersService | CitiesService;

@Module({
  providers: [UsersService, CitiesService],
  exports: [UsersService, CitiesService]
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
