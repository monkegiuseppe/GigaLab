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
    
    const matrixMatch = arrayString.match(/^\[\s*(\[.*?\](?:\s*,\s*\[.*?\])*)\s*\]$/);
    
    if (!matrixMatch) {
      return matrixString;
    }
    
    const rowsString = matrixMatch[1];
    const rowRegex = /\[(.*?)\]/g;
    let rows = [];
    let rowMatch;
    
    while ((rowMatch = rowRegex.exec(rowsString)) !== null) {
      const elements = rowMatch[1].split(',').map(el => el.trim());
      rows.push(elements);
    }
    
    if (rows.length === 0) {
      return matrixString;
    }
    
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
  if (typeof text !== 'string') {
    text = String(text);
  }

  const elements = [];
  let lastIndex = 0;

  while (lastIndex < text.length) {
    // Find the next occurrence of either pattern
    const dollarIndex = text.indexOf('$', lastIndex);
    const matrixIndex = text.indexOf('MATRIX(', lastIndex);

    let nextMatchIndex = -1;
    let isDollarMatch = false;

    // Determine which match comes first
    if (dollarIndex !== -1 && (matrixIndex === -1 || dollarIndex < matrixIndex)) {
      nextMatchIndex = dollarIndex;
      isDollarMatch = true;
    } else if (matrixIndex !== -1) {
      nextMatchIndex = matrixIndex;
    } else {
      // No more matches, exit the loop
      break;
    }

    // Add the plain text before the match
    if (nextMatchIndex > lastIndex) {
      elements.push(<span key={`text-${lastIndex}`}>{text.substring(lastIndex, nextMatchIndex)}</span>);
    }

    if (isDollarMatch) {
      const closingDollarIndex = text.indexOf('$', nextMatchIndex + 1);
      if (closingDollarIndex !== -1) {
        const mathContent = text.substring(nextMatchIndex + 1, closingDollarIndex);
        elements.push(<InlineMath key={`math-${nextMatchIndex}`} math={mathContent} />);
        lastIndex = closingDollarIndex + 1;
      } else {
        // Unmatched dollar sign, treat as plain text
        elements.push(<span key={`text-${lastIndex}`}>{text.substring(nextMatchIndex, nextMatchIndex + 1)}</span>);
        lastIndex = nextMatchIndex + 1;
      }
    } else { // It's a MATRIX match
      // Find the corresponding closing parenthesis using a counter to handle nesting
      let openParenCount = 1;
      let closingParenIndex = -1;
      const startIndex = nextMatchIndex + 'MATRIX('.length;

      for (let i = startIndex; i < text.length; i++) {
        if (text[i] === '(') openParenCount++;
        if (text[i] === ')') openParenCount--;
        if (openParenCount === 0) {
          closingParenIndex = i;
          break;
        }
      }

      if (closingParenIndex !== -1) {
        const matrixContent = text.substring(startIndex, closingParenIndex);
        const latexMatrix = parseAndFormatMatrix(matrixContent);
        elements.push(<InlineMath key={`matrix-${nextMatchIndex}`} math={latexMatrix} />);
        lastIndex = closingParenIndex + 1;
      } else {
        // Unmatched parenthesis, treat as plain text
        elements.push(<span key={`text-${lastIndex}`}>{text.substring(nextMatchIndex, startIndex)}</span>);
        lastIndex = startIndex;
      }
    }
  }

  // Add any remaining text at the end
  if (lastIndex < text.length) {
    elements.push(<span key={`text-${lastIndex}`}>{text.substring(lastIndex)}</span>);
  }

  return (
    <Component className={className}>
      {elements}
    </Component>
  );
}