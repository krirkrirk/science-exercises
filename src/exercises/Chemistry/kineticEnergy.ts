import { ScienceExercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { round } from '#root/exercises/utils/math/round';
import { shuffle } from '#root/exercises/utils/shuffle';
import { v4 } from 'uuid';

export const kineticEnergy: ScienceExercise = {
  id: 'kineticEnergy',
  connector: '=',
  instruction: '',
  label: "Calculer l'énergie cinétique",
  levels: ['4ème', '3ème', '2nde'],
  sections: ['Mécanique'],
  subject: 'Physique',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getKineticEnergyQuestion, nb),
  keys: [],
  qcmTimer: 60,
  freeTimer: 60,
};

export function getKineticEnergyQuestion(): Question {
  const mass = Math.floor(Math.random() * 50 + 90) * 10; // Masse de la voiture entre 900 et 1500 kg
  const velocity = Math.floor(Math.random() * 20 + 10); // Vitesse de la voiture en m/s

  const kineticEnergy = 0.5 * mass * velocity ** 2;

  const instruction = `Une voiture ayant une masse de $${mass}$ kg qui se déplace le long d'une route. La voiture accélère et atteint une vitesse de $${velocity}$ m/s.
   $\\\\$ Calculer l'énergie cinétique (en kJ) de la voiture lorsqu'elle atteint cette vitesse.`;

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: round(kineticEnergy / 1000, 2) + ' \\ kJ',
      isRightAnswer: true,
      format: 'tex',
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        proposition = {
          id: v4() + '',
          statement: round((kineticEnergy / 1000) * (0.3 + Math.random() * 1.5), 2) + ' \\ kJ',
          isRightAnswer: false,
          format: 'tex',
        };

        isDuplicate = res.some((p) => p.statement === proposition.statement);
      } while (isDuplicate);

      res.push(proposition);
    }

    return shuffle(res);
  };

  const question: Question = {
    instruction,
    startStatement: 'Ec',
    answer: `${round(kineticEnergy / 1000, 2)} \\ kJ`,
    keys: ['kJ'],
    getPropositions,
    answerFormat: 'tex',
  };
  return question;
}
