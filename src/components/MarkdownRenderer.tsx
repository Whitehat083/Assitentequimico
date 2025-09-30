
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const renderContent = () => {
    // Process sections with bold headers
    const lines = content.split('\n');
    // FIX: Use React.ReactNode to avoid 'Cannot find namespace JSX' error.
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul className="list-disc list-inside space-y-1 my-2" key={`list-${elements.length}`}>
            {listItems.map((item, i) => (
              <li key={i}>{parseInlineFormatting(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    lines.forEach((line, index) => {
      // Bold headers
      if (line.match(/^\*\*(.*?)\*\*/)) {
        flushList();
        elements.push(<strong className="block text-white font-semibold my-2" key={index}>{line.replace(/\*\*/g, '')}</strong>);
      } 
      // Italic safety warnings
      else if (line.match(/^\*(.*?)\*/)) {
        flushList();
        elements.push(<em className="block text-yellow-400 my-2" key={index}>{line.replace(/\*/g, '')}</em>);
      }
      // List items (numbered or dashed)
      else if (line.match(/^(\d+\.|-)\s/)) {
        inList = true;
        listItems.push(line.replace(/^(\d+\.|-)\s/, ''));
      } else {
        flushList();
        elements.push(<p key={index}>{parseInlineFormatting(line)}</p>);
      }
    });

    flushList(); // Flush any remaining list items

    return elements;
  };
  
  const parseInlineFormatting = (text: string) => {
      // This is a simplified version, can be expanded
      const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
      return parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
          }
          if (part.startsWith('*') && part.endsWith('*')) {
              return <em key={i} className="italic text-gray-300">{part.slice(1, -1)}</em>;
          }
          if (part.startsWith('`') && part.endsWith('`')) {
              return <code key={i} className="bg-gray-700 text-cyan-300 rounded px-1 py-0.5 text-sm">{part.slice(1, -1)}</code>;
          }
          return part;
      });
  };


  return <div className="prose prose-invert prose-sm max-w-none space-y-2">{renderContent()}</div>;
};

export default MarkdownRenderer;