// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-express-composition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, model, property} from '@loopback/repository';

@model()
export class Purpose extends Entity {
  @property({
    generated: false,
    id: true,
  })
  id?: string;

  @property({
    required: true,
  })
  value: string;

  @property()
  title?: string;

  @property()
  description?: string;

  constructor(data?: Partial<Purpose>) {
    super(data);
  }
}

export interface PurposeRelations {
  // describe navigational properties here
}

export type PurposeWithRelations = Purpose & PurposeRelations;
