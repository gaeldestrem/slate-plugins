import { Editor, Node, NodeEntry, Text, Transforms } from 'slate';
import { match } from '../../../common/utils';
import { setDefaults } from '../../../common/utils/setDefaults';
import { DEFAULTS_BLOCKQUOTE, ELEMENT_BLOCKQUOTE } from '../defaults';
import { BlockquoteOptions } from '../types';

/**
 * Force all blockquote children to be a block, if not, wrap them in a paragraph
 */
export const normalizeBlockquote = (
  editor: Editor,
  options: BlockquoteOptions
) => {
  const { normalizeNode } = editor;

  const { p } = setDefaults(options, DEFAULTS_BLOCKQUOTE);

  return (entry: NodeEntry) => {
    const [node, path] = entry;

    // Ensure all direct children of a blockquote is a block, if not, wrap them in a paragraph
    if (match(node, { type: ELEMENT_BLOCKQUOTE })) {
      for (const [child, childPath] of Node.children(editor, path)) {
        if (Text.isText(child) || editor.isInline(child)) {
          Transforms.wrapNodes(
            editor,
            { type: p.type, children: [] },
            { at: childPath }
          );
          return;
        }
      }
    }

    normalizeNode(entry);
  };
};
