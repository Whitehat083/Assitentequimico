import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const renderContent = () => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];

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
    };

    lines.forEach((line, index) => {
      if (line.match(/^\*\*(.*?)\*\*/)) {
        flushList();
        elements.push(<strong className="block text-white font-semibold my-2" key={index}>{line.replace(/\*\*/g, '')}</strong>);
      } 
      else if (line.match(/^\*(.*?)\*/)) {
        flushList();
        elements.push(<em className="block text-yellow-400 my-2" key={index}>{line.replace(/\*/g, '')}</em>);
      }
      else if (line.match(/^(\d+\.|-)\s/)) {
        listItems.push(line.replace(/^(\d+\.|-)\s/, ''));
      } else {
        flushList();
        if (line.trim()) {
            elements.push(<p key={index}>{parseInlineFormatting(line)}</p>);
        }
      }
    });

    flushList(); 

    return elements;
  };
  
  const parseInlineFormatting = (text: string) => {
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