/**
 * @license
 * Copyright a-Qoot All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/a-Qoot/qoot/blob/main/LICENSE
 */

import { expect } from 'chai';
import '../CONFIG.js';
import { provideProviderOf } from './provide_provider_of.js';
import { Injector } from './types.js';

describe('provideProviderOf', () => {
  it('should Provider', async () => {
    const injector: Injector = {} as any;
    const obj = {};
    const objProvider = await provideProviderOf((injector: Injector) => [injector, obj])(injector);
    expect(await objProvider()).to.eql([injector, obj]);
  });
});