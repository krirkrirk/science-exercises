import { Exercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { randint } from '#root/exercises/utils/math/random/randint';
import { round } from '#root/exercises/utils/math/round';
import { shuffle } from '#root/exercises/utils/shuffle';
import { v4 } from 'uuid';

export const delution: Exercise = {
  id: 'delution',
  connector: '=',
  instruction: '',
  label: "Déterminer le volume d'une solution après dilution.",
  levels: ['4', '3', '2'],
  section: 'Chimie des solutions',
  subject: 'Chimie',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getDelution, nb),
  keys: [],
};

export function getDelution(): Question {
  const concentrationMere = round(Math.random() * 0.4 + 0.1, 2); // entre 0.1 et 0.5 mol/L pour C1
  const volumeFille = round(Math.random() * 200 + 50, 0); // entre 50 et 250 mL pour V2
  const concentrationFille = round(Math.random() * 0.05 + 0.01, 2); // entre 0.01 et 0.06 mol/L pour C2
  const volumeMere = round((volumeFille * concentrationFille) / concentrationMere, 2);

  const instruction = `Soit une solution mère de concentration $C_1$ = $${concentrationMere}$ mol/L. On souhaite préparer
  une solution ﬁlle de volume $V_2$ = $${volumeFille}$ mL de concentration $C_2$ = $${concentrationFille}$ mol/L.
  $\\\\$ Calculer le volume $V_1$ à prélever.`;

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: volumeMere + ' \\ mL',
      isRightAnswer: true,
    });

    res.push({
      id: v4() + '',
      statement: round((volumeFille * concentrationMere) / concentrationFille, 2) + ' \\ mL',
      isRightAnswer: false,
    });

    if (n > 2)
      res.push({
        id: v4() + '',
        statement: round(concentrationMere / (volumeFille * concentrationFille), 2) + ' \\ mL',
        isRightAnswer: false,
      });

    for (let i = 0; i < n - 3; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        const wrongAnswer = volumeMere + randint(-volumeMere, 11, [0]);
        proposition = {
          id: v4() + '',
          statement: wrongAnswer.toFixed(2) + ' \\ mL',
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
    startStatement: `V_1`,
    answer: volumeMere + ' \\ mL',
    keys: ['mL'],
    getPropositions,
  };
  return question;
}
