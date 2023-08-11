import { Exercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { randint } from '#root/exercises/utils/math/random/randint';
import { round } from '#root/exercises/utils/math/round';
import { shuffle } from '#root/exercises/utils/shuffle';
import { v4 } from 'uuid';

export const pH: Exercise = {
  id: 'pH',
  connector: '=',
  instruction: '',
  label: "Calcul du pH d'une solution",
  levels: ['4', '3', '2'],
  section: 'Acide / Base',
  subject: 'Chimie',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getpH, nb),
  keys: [],
};

export function getpH(): Question {
  const randomNumber = randint(1, 10);
  const randomTenPower = randint(2, 10);

  const concentrationHydrogene = randomNumber * 10 ** -randomTenPower;

  const instruction = `Calculez le pH d'une solution ayant une concentration en ions hydrogène (H+) de $${randomNumber} \\times 10^{-${randomTenPower}}$ mol/L.`;

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: round(-Math.log10(concentrationHydrogene), 1) + '',
      isRightAnswer: true,
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        const randomNumber = randint(1, 10);
        const randomTenPower = randint(2, 10);
        const concentrationHydrogene = randomNumber * 10 ** -randomTenPower;
        const wrongAnswer = round(-Math.log10(concentrationHydrogene), 1) + '';
        proposition = {
          id: v4() + '',
          statement: wrongAnswer,
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
    startStatement: `[H_3O^+]`,
    answer: round(-Math.log10(concentrationHydrogene), 1) + '',
    keys: ['log'],
    getPropositions,
  };
  return question;
}
