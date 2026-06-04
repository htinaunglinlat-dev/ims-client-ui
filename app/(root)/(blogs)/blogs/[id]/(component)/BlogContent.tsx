"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";

type BlogContentProps = {
  content: string;
};

// BLOG / COURSE CONTENT SECTION
// ============================================================================
export function BlogContent({ content }: BlogContentProps) {
  const editor = useEditor({
    extensions: [StarterKit, TextStyleKit],
    content,
    editable: false,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose-blog mx-auto leading-8 focus:outline-none",
      },
    },
  });

  return <EditorContent editor={editor} />;
}
