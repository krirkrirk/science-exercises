import { Exercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { ReactionConstructor } from '#root/exercises/utils/molecularChemistry/reaction';
import { shuffle } from '#root/exercises/utils/shuffle';
import { v4 } from 'uuid';

export const chemicalEquations: Exercise = {
  id: 'chemicalEquations',
  connector: '\\iff',
  instruction: '',
  label: 'Équilibrer une réaction chimique',
  levels: ['4', '3', '2'],
  section: 'Réaction chimique',
  subject: 'Chimie',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getChemicalEquations, nb),
  keys: [],
};

export function getChemicalEquations(): Question {
  const reaction = ReactionConstructor.randomReaction();

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: reaction.getReactionString(),
      isRightAnswer: true,
      format: 'tex',
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        proposition = {
          id: v4() + '',
          statement: reaction.getReactionWithWrongCoef(),
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
    instruction: 'Equilibrez la réaction suivante :$\\\\$ ' + reaction.getReactionWithoutCoef(),
    answer: reaction.getReactionString(),
    keys: [...reaction.getSpeciesName(), 'rightarrow'],
    getPropositions,
    answerFormat: 'tex',
  };
  return question;
}
