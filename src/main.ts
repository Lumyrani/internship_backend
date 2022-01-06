import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtGuard } from './guard/jwt.guard';
import { RolesGuard } from './guard/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true});
  const reflector = app.get(Reflector)
  app.useGlobalGuards(new JwtGuard(reflector))
  app.useGlobalGuards(new RolesGuard(reflector))
  await app.listen(3000);
}
bootstrap();
