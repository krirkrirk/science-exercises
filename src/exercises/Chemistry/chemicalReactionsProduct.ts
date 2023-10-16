import { Exercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { v4 } from 'uuid';
import { ReactionConstructor, molecules } from '#root/exercises/utils/molecularChemistry/reaction';
import { shuffle } from '#root/exercises/utils/shuffle';
import { randint } from '#root/exercises/utils/math/random/randint';

export const chemicalReactionsProduct: Exercise = {
  id: 'chemicalReactionsProduct',
  connector: '\\iff',
  instruction: '',
  label: "Identifier le produit ou le réactif manquant d'une réaction chimique donnée",
  levels: ['4ème', '3ème', '2nde'],
  sections: ['Réaction chimique'],
  subject: 'Chimie',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getChemicalReactionsProduct, nb),
  keys: [],
  qcmTimer: 60,
  freeTimer: 60,
};

export function getChemicalReactionsProduct(): Question {
  const reaction = ReactionConstructor.randomReaction();
  const randomSpacieIndex = randint(0, reaction.reactionArray.length);
  const randomSpacie = reaction.reactionArray[randomSpacieIndex];
  const randomSpacieFormula = randomSpacie.species?.formula;
  const randomSpacieCoef = Math.abs(randomSpacie.coefficient) === 1 ? '' : Math.abs(randomSpacie.coefficient);

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: randomSpacieFormula + '',
      isRightAnswer: true,
      format: 'tex',
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        proposition = {
          id: v4() + '',
          statement: molecules[randint(0, molecules.length)].formula,
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
    instruction:
      "Completer la réaction suivante en donnant l'élement manquant : $\\\\$ " +
      reaction.getReactionWithQuestionMark(randomSpacieIndex),
    answer: randomSpacieCoef + '' + randomSpacieFormula,
    keys: [...reaction.getUniqueAtomNames(), 'underscore'],
    getPropositions,
    answerFormat: 'tex',
  };
  return question;
}
