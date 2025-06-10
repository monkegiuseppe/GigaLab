/**
 * Calculates the new ELO rating for a player.
 * @param {number} playerElo - The current ELO of the player.
 * @param {number} problemElo - The ELO (difficulty) of the problem.
 * @param {boolean} wasCorrect - True if the player answered correctly, false otherwise.
 * @param {number} kFactor - The K-factor, determines how much the ELO changes.
 * @returns {number} The new ELO rating, rounded to the nearest integer.
 */
export function calculateNewElo(playerElo, problemElo, wasCorrect, kFactor = 32) {
  const score = wasCorrect ? 1 : 0;

  // Calculate the expected score for the player against this problem
  const expectedScore = 1 / (1 + Math.pow(10, (problemElo - playerElo) / 400));

  // Calculate the new ELO rating
  const newElo = playerElo + kFactor * (score - expectedScore);

  return Math.round(newElo);
}