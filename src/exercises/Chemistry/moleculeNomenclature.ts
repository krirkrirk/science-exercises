import { Exercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { molecules } from '#root/exercises/utils/molecularChemistry/molecule';
import { shuffle } from '#root/exercises/utils/shuffle';
import { v4 } from 'uuid';

export const moleculeNomenclature: Exercise = {
  id: 'moleculeNomenclature',
  connector: '\\iff',
  instruction: '',
  label: "Donner le nom d'une molécule à partir de sa formule développée",
  levels: ['4', '3', '2'],
  section: 'Chimie organique',
  subject: 'Chimie',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getMoleculeNomenclature, nb),
  keys: [],
};

export function getMoleculeNomenclature(): Question {
  const organicMolecule = molecules.filter((molecule) => molecule.isOrganic && molecule.type);
  const randomMoleculeIndex = Math.floor(Math.random() * organicMolecule.length);
  const myRandomMolecule = organicMolecule[randomMoleculeIndex];

  const instruction = `Donner le nom de la molécule suivante : 
  $\\\\$ ![](https://heureuxhasarddocsbucket.s3.eu-west-3.amazonaws.com/xpliveV2/scienceAssets/molecules/${myRandomMolecule.formula}.png)`;

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: myRandomMolecule.name,
      isRightAnswer: true,
      format: 'raw',
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        const randomMoleculeIndex = Math.floor(Math.random() * organicMolecule.length);
        const myRandomMolecule = organicMolecule[randomMoleculeIndex];
        proposition = {
          id: v4() + '',
          statement: myRandomMolecule.name,
          isRightAnswer: false,
          format: 'raw',
        };

        isDuplicate = res.some((p) => p.statement === proposition.statement);
      } while (isDuplicate);

      res.push(proposition);
    }

    return shuffle(res);
  };

  const question: Question = {
    instruction,
    answer: myRandomMolecule.iupact!,
    keys: [],
    getPropositions,
    answerFormat: 'raw',
  };
  return question;
}
