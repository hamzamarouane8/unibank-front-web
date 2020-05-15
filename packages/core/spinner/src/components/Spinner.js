import React from 'react';
import Spinner from '@atlaskit/spinner';
import { Sizes } from '@sgabskit/constants';

const SIZES_MAPPING = {
  [Sizes.XXS]: 'xsmall',
  [Sizes.XS]: 'xsmall',
  [Sizes.SM]: 'small',
  [Sizes.MD]: 'medium',
  [Sizes.LG]: 'large',
  [Sizes.XL]: 'xlarge',
  [Sizes.XXL]: 'xlarge',
};

export default ({ size }) => <Spinner size={SIZES_MAPPING[size]}/>
