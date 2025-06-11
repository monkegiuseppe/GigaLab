import React from 'react';
import { InlineMath } from 'react-katex';

/**
 * Parses a string like "A = [[1,2],[3,4]]" into a LaTeX matrix.
 * @param {string} matrixString - The raw string to parse.
 * @returns {string} A LaTeX formatted string.
 */
const parseAndFormatMatrix = (matrixString) => {
  try {
    const parts = matrixString.split('=');
    const namePart = parts.length > 1 ? `${parts[0].trim()} =` : '';
    const arrayString = parts.length > 1 ? parts[1].trim() : parts[0].trim();
    
    // Instead of JSON.parse, use a regex to parse the matrix structure
    // This regex matches nested arrays with numbers, variables, or expressions
    const matrixMatch = arrayString.match(/^\[\s*(\[.*?\](?:\s*,\s*\[.*?\])*)\s*\]$/);
    
    if (!matrixMatch) {
      return matrixString;
    }
    
    // Extract rows - match everything between [ and ]
    const rowsString = matrixMatch[1];
    const rowRegex = /\[(.*?)\]/g;
    const rows = [];
    let rowMatch;
    
    while ((rowMatch = rowRegex.exec(rowsString)) !== null) {
      // Split by comma but preserve the original formatting
      const elements = rowMatch[1].split(',').map(el => el.trim());
      rows.push(elements);
    }
    
    if (rows.length === 0) {
      return matrixString;
    }
    
    // Build LaTeX matrix
    const latexBody = rows
      .map(row => row.join(' & '))
      .join(' \\\\ ');
    
    return `${namePart} \\begin{bmatrix} ${latexBody} \\end{bmatrix}`;
  } catch (error) {
    console.error("Failed to parse matrix:", matrixString, error);
    return matrixString;
  }
};

export default function ProblemRenderer({ 
  text, 
  as: Component = 'p', 
  className = "text-xl md:text-2xl leading-relaxed text-slate-100" 
}) {
  const regex = /(\$(.*?)\$)|(MATRIX\((.*?)\))/g;
  
  const elements = [];
  let lastIndex = 0;

  if (typeof text !== 'string') {
    // Handle cases where the answer might be a number
    text = String(text);
  }

  for (const match of text.matchAll(regex)) {
    if (match.index > lastIndex) {
      elements.push(<span key={lastIndex}>{text.substring(lastIndex, match.index)}</span>);
    }
    
    const inlineMathContent = match[2];
    const matrixContent = match[4];

    if (inlineMathContent !== undefined) {
      elements.push(<InlineMath key={match.index} math={inlineMathContent} />);
    } else if (matrixContent !== undefined) {
      const latexMatrix = parseAndFormatMatrix(matrixContent);
      elements.push(<InlineMath key={match.index} math={latexMatrix} />);
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    elements.push(<span key={lastIndex}>{text.substring(lastIndex)}</span>);
  }

  // Use the dynamic Component and className
  return (
    <Component className={className}>
      {elements}
    </Component>
  );
}