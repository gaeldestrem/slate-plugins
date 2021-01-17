/** @jsx jsx */

import { Editor } from 'slate';
import { withReact } from 'slate-react';
import { jsx } from '../../__test-utils__/jsx';
import { pipe } from '../../common/utils';
import { withBlockquote } from './index';

describe('normalizeBlockquote', () => {
  describe('when inserting a text in an empty blockquote', () => {
    it('should wrap the text in a paragraph', () => {
      const input = ((
        <editor>
          <hblockquote>
            <cursor />
          </hblockquote>
        </editor>
      ) as any) as Editor;

      const expected = ((
        <editor>
          <hblockquote>
            <hp>o</hp>
          </hblockquote>
        </editor>
      ) as any) as Editor;

      const editor = pipe(input, withReact, withBlockquote());

      editor.insertText('o');

      expect(editor.children).toEqual(expected.children);
    });
  });
});
