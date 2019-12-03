/*** Copyright 2018 Johannes Kessler
*
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { HeaderTranslated } from 'calc2/store/groups';

export function translateHeader(h: HeaderTranslated, locale: string): string {
  if (h[locale]) {
    return h[locale];
  }
  else {
    return h.fallback;
  }
}
