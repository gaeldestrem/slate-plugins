import { ReactEditor } from 'slate-react';
import { normalizeBlockquote } from './normalizers';
import { BlockquoteOptions } from './types';

export const withBlockquote = (options: BlockquoteOptions = {}) => <
  T extends ReactEditor
>(
  editor: T
) => {
  editor.normalizeNode = normalizeBlockquote(editor, options);

  return editor;
};
