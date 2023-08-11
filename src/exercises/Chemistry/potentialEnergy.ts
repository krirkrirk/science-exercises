import { Exercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { round } from '#root/exercises/utils/math/round';
import { shuffle } from '#root/exercises/utils/shuffle';
import { v4 } from 'uuid';

export const potentialEnergy: Exercise = {
  id: 'potentialEnergy',
  connector: '\\iff',
  instruction: '',
  label: "Calcul de l'énergie potentielle",
  levels: ['4', '3', '2'],
  section: 'Mécanique',
  subject: 'Physique',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getPotentialEnergy, nb),
  keys: [],
};

export function getPotentialEnergy(): Question {
  const mass = Math.floor(Math.random() * 10 + 1); // Masse de l'objet entre 1 et 11 kg
  const height = Math.floor(Math.random() * 50 + 1); // Hauteur par rapport à la référence entre 1 et 51 m
  const gravitationalAcceleration = 9.81; // Accélération due à la gravité en m/s²

  const potentialEnergy = mass * 9.81 * height;

  const instruction = `Un objet de masse ${mass} kg est suspendu à une hauteur de ${height} mètres. Il est ensuite relâché et tombe librement.
  $\\\\$ Calculer l'énergie potentielle de l'objet. (Supposons que l'accélération due à la gravité soit de 9,81 m/s²)`;

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: round(potentialEnergy, 2) + ' \\ J',
      isRightAnswer: true,
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        proposition = {
          id: v4() + '',
          statement: round(potentialEnergy * (0.3 + Math.random() * 1.5), 2) + ' \\ J',
          isRightAnswer: false,
        };

        isDuplicate = res.some((p) => p.statement === proposition.statement);
      } while (isDuplicate);

      res.push(proposition);
    }

    return shuffle(res);
  };

  const question: Question = {
    instruction,
    startStatement: 'Ep',
    answer: `${round(potentialEnergy, 2)}  \\ J`,
    keys: ['J'],
    getPropositions,
  };
  return question;
}