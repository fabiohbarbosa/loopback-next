import {Client, expect, supertest} from '@loopback/testlab';

import {NoteApplication} from '../../../application';
import {setupExpressApplication} from '../test-helper';
import {Purpose} from '../../../models';

describe('Purpose Controller', () => {
  let client: Client;
  const url = '/api/purposes';

  before('setupApplication', async () => {
    // const appWithClient = await setupExpressApplication();
    // client = appWithClient.client;
    client = supertest('http://127.0.0.1:3000')
  });

  it('should patch purpose and not update undefined fields to null', async () => {

    const postData = {
      value: 'postTest',
      title: 'title',
    };

    // post
    const postRes = await client
      .post(url)
      .send(postData);

    expect(postRes.status).eql(200);
    const postPurposeRes: Purpose = postRes.body;

    expect(postPurposeRes.id).not.undefined();
    expect(postPurposeRes.value).eql(postData.value);
    expect(postPurposeRes.title).eql(postData.title);
    expect(postPurposeRes.description).undefined();

    // patch

    const patchData = {
      value: 'patchTest',
    };

    const patchRes = await client
      .patch(`${url}/${postPurposeRes.id}`)
      .send(patchData);

    expect(patchRes.status).eql(200);
    const patchPurposeRes: Purpose = patchRes.body;

    expect(patchPurposeRes.id).not.undefined();
    expect(patchPurposeRes.value).eql(patchData.value);
    expect(postPurposeRes.title).eql(postData.title);
    expect(patchPurposeRes.description).undefined();
  });


});
