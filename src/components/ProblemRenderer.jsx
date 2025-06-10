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

export default function ProblemRenderer({ text }) {
  // This regex finds either $...$ or MATRIX(...) expressions.
  // It uses capturing groups to differentiate them.
  // Group 2: Content inside $...$
  // Group 4: Content inside MATRIX(...)
  const regex = /(\$(.*?)\$)|(MATRIX\((.*?)\))/g;
  
  const elements = [];
  let lastIndex = 0;

  // Use matchAll to iterate over all matches in the string
  for (const match of text.matchAll(regex)) {
    // 1. Add the plain text before the match
    if (match.index > lastIndex) {
      elements.push(<span key={lastIndex}>{text.substring(lastIndex, match.index)}</span>);
    }

    // 2. Determine which type of expression was matched and render it
    const inlineMathContent = match[2];
    const matrixContent = match[4];

    if (inlineMathContent !== undefined) {
      // It's a standard KaTeX expression
      elements.push(<InlineMath key={match.index} math={inlineMathContent} />);
    } else if (matrixContent !== undefined) {
      // It's our custom MATRIX expression
      const latexMatrix = parseAndFormatMatrix(matrixContent);
      elements.push(<InlineMath key={match.index} math={latexMatrix} />);
    }

    // 3. Update the lastIndex to the end of the current match
    lastIndex = match.index + match[0].length;
  }

  // 4. Add any remaining plain text after the last match
  if (lastIndex < text.length) {
    elements.push(<span key={lastIndex}>{text.substring(lastIndex)}</span>);
  }

  return (
    <p className="text-xl md:text-2xl leading-relaxed text-slate-100">
      {elements}
    </p>
  );
}