import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('testing app with order', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('create a order with status code 201', () => {
    return request(app.getHttpServer())
      .post('/api/v1/order')
      .send({
        serial_no:"test",
        qty:4
        })
      .expect(201)
      .then((res) => {
       const {serial_no,qty,id} = res.body;
       expect(id).toBeDefined()
       expect(serial_no).toEqual("test")
      })
  });
});
