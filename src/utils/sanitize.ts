import DOMPurify from 'dompurify';
import parse from 'html-dom-parser';

export const sanitize = (content: any) =>
  process.browser ? parse(DOMPurify.sanitize(content)) : content;
