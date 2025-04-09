
import React, { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button 
        className="absolute top-2 right-2 p-1 bg-gray-800 rounded-md hover:bg-gray-700"
        onClick={() => copyToClipboard(code)}
      >
        {copied ? <CopyCheck size={18} className="text-green-500" /> : <Copy size={18} className="text-white" />}
      </button>
    </div>
  );
};

export default CodeBlock;
