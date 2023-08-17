import { Exercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { randint } from '#root/exercises/utils/math/random/randint';
import { round } from '#root/exercises/utils/math/round';
import { molecules } from '#root/exercises/utils/molecularChemistry/molecule';
import { shuffle } from '#root/exercises/utils/shuffle';
import { v4 } from 'uuid';

export const moleculeFormula: Exercise = {
  id: 'moleculeFormula',
  connector: '\\iff',
  instruction: '',
  label: "Donner la formule brute d'une molécule à partir de sa formule développée",
  levels: ['4', '3', '2'],
  section: 'Chimie organique',
  subject: 'Chimie',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getMoleculeNFormula, nb),
  keys: [],
};

export function getMoleculeNFormula(): Question {
  const organicMolecule = molecules.filter((molecule) => molecule.isOrganic);
  const randomMoleculeIndex = Math.floor(Math.random() * organicMolecule.length);
  const myRandomMolecule = organicMolecule[randomMoleculeIndex];

  const instruction = `Donner la formule brute de la molécule suivante : 
  $\\\\$ ![](https://heureuxhasarddocsbucket.s3.eu-west-3.amazonaws.com/xpliveV2/scienceAssets/molecules/${myRandomMolecule.formula}.png)`;

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: myRandomMolecule.formula,
      isRightAnswer: true,
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        const randomMoleculeIndex = Math.floor(Math.random() * organicMolecule.length);
        const myRandomMolecule = organicMolecule[randomMoleculeIndex];
        proposition = {
          id: v4() + '',
          statement: myRandomMolecule.formula,
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
    answer: myRandomMolecule.formula,
    keys: [],
    getPropositions,
  };
  return question;
}