import { DynamicModule, Module, Provider } from '@nestjs/common';
import { UsersService } from './providers/users/users.service';
import { DataSource } from 'typeorm';

type Providers = UsersService;

@Module({
  providers: [UsersService],
  exports: [UsersService]
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
