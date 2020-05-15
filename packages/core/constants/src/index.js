export const Sizes = {

  HERO: 'hero',
  XXS: 'xxsmall',
  XS: 'xsmall',
  SM: 'small',
  MD: 'medium',
  LG: 'large',
  XL: 'xlarge',
  XXL: 'xxlarge',

  fromProps: (props) => {
    if (!props) return Sizes.SM;
    const res = Object.values(Sizes).filter((size) => (props[size] || props.size === size));
    if (res) return res[0];
    return Sizes.SM;
  },

  extract: (props) => {
    if (!props) return Sizes.SM;
    const res = Object.values(Sizes).filter((size) => (props[size] || props.size === size));
    if (res) return res[0];
    return Sizes.SM;
  },
};

