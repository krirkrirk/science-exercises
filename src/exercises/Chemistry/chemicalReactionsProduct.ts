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
  label: "Identifiez le produit ou le réactif manquant d'une réaction chimique donnée.",
  levels: ['4', '3', '2'],
  section: 'Réaction chimique',
  subject: 'Chimie',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getChemicalReactionsProduct, nb),
  keys: [],
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
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        proposition = {
          id: v4() + '',
          statement: molecules[randint(0, molecules.length)].formula,
          isRightAnswer: false,
        };

        isDuplicate = res.some((p) => p.statement === proposition.statement);
      } while (isDuplicate);

      res.push(proposition);
    }

    return shuffle(res);
  };

  const question: Question = {
    instruction:
      "Completer la réaction suivante en donnant l'élement manquant. $\\\\$ " +
      reaction.getReactionWithQuestionMark(randomSpacieIndex),
    answer: randomSpacieCoef + '' + randomSpacieFormula,
    keys: reaction.getUniqueAtomNames(),
    getPropositions,
  };
  return question;
}
