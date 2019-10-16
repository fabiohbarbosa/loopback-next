// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-express-composition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {repository} from '@loopback/repository';
import {param, patch, post, requestBody} from '@loopback/rest';
import {Purpose} from '../models';
import {NoteRepository, PurposeRepository} from '../repositories';

export class PurposeController {
  constructor(
    @repository(PurposeRepository)
    public purposeRepository: PurposeRepository,
  ) {}

  @post('/purposes')
  async create(
    @requestBody()
    purpose: Omit<Purpose, 'id'>,
  ): Promise<Purpose> {
    return this.purposeRepository.create(purpose);
  }

  @patch('/purposes/{id}')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() purpose: Partial<Purpose>,
  ): Promise<Purpose> {
    await this.purposeRepository.updateById(id, purpose);
    return await this.purposeRepository.findById(id);
  }

}
