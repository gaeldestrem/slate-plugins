import { DEFAULTS_PARAGRAPH } from '../paragraph';
import { BlockquoteElement } from './components/BlockquoteElement';
import {
  BlockquoteDefaultsOptions,
  BlockquotePluginOptionsValues,
} from './types';

export const ELEMENT_BLOCKQUOTE = 'blockquote';

export const DEFAULTS_BLOCKQUOTE: Record<
  BlockquoteDefaultsOptions,
  BlockquotePluginOptionsValues
> = {
  blockquote: {
    component: BlockquoteElement,
    type: ELEMENT_BLOCKQUOTE,
    hotkey: 'mod+shift+.',
    rootProps: {
      className: 'slate-blockquote',
      as: 'blockquote',
    },
  },
  ...DEFAULTS_PARAGRAPH,
};
