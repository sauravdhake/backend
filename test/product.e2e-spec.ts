import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('testing app with create product', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('create a product with status code 201', () => {
    return request(app.getHttpServer())
      .post('/api/v1/product')
      .send({
        product_name:"hello",
        description:"tapp",
        serial_no:"hello",
        price:"34",
        qty:"4",
        isactive:false
    })
      .expect(201)
      .then((res) => {
       const {serial_no,isactive,id} = res.body;
       expect(id).toBeDefined()
       expect(serial_no).toEqual("hello")
       expect(isactive).toEqual(true)
      })
  });
});
