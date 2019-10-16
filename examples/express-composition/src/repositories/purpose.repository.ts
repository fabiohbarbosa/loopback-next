// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-express-composition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsDataSource} from '../datasources';
import {Purpose, PurposeRelations} from '../models';

export class PurposeRepository extends DefaultCrudRepository<
  Purpose,
  typeof Purpose.prototype.id,
  PurposeRelations
> {
  constructor(@inject('datasources.ds') dataSource: DsDataSource) {
    super(Purpose, dataSource);
  }
}
