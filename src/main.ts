// Este arquivo fica no projeto do BACKEND (NestJS)
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita o CORS para permitir que o Frontend (porta 3001 ou 3000) acesse a API
  app.enableCors({
    origin: '*', // Em produção você colocaria a URL do frontend, mas '*' resolve agora
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
  console.log('Backend rodando em: http://localhost:3000');
}
bootstrap();
