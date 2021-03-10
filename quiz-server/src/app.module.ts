import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CategoriesModule,
    MongooseModule.forRoot(
      `mongodb+srv://oksnard:iwrest12@cluster0.j5fsz.mongodb.net/myFirstDatabase`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
