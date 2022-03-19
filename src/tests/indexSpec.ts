import supertest from 'supertest';
import app from '../../index';

describe('endpoint test', () => {
  it('should test the /apis/processor endoint', async () => {
    const request = supertest(app);
    const response = await request.get('/apis/processor');
    // console.log(response);
    expect(response.status).toEqual(200);
  });
  it("send error message 'incomplete parameter' when any of the parameter is missing ", async () => {
    const request = supertest(app);
    const response = await request.get('/api/processor?height=250&imageName=fjord');
  });
});
