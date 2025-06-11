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
    const matrixArray = JSON.parse(arrayString.replace(/'/g, '"'));

    if (!Array.isArray(matrixArray) || !Array.isArray(matrixArray[0])) {
      return matrixString;
    }

    const latexBody = matrixArray
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