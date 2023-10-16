import { Exercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { randint } from '#root/exercises/utils/math/random/randint';
import { round } from '#root/exercises/utils/math/round';
import { atomes } from '#root/exercises/utils/molecularChemistry/atome';
import { molecules } from '#root/exercises/utils/molecularChemistry/molecule';
import { shuffle } from '#root/exercises/utils/shuffle';
import { v4 } from 'uuid';

export const formulaFromComposition: Exercise = {
  id: 'formulaFromComposition',
  connector: '\\iff',
  instruction: '',
  label: 'Déterminer la formule brute à partir de la composition centésimale',
  levels: ['4ème', '3ème', '2nde'],
  sections: ['Chimie organique'],
  subject: 'Chimie',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getFormulaFromComposition, nb),
  keys: [],
  qcmTimer: 60,
  freeTimer: 60,
};

export function getFormulaFromComposition(): Question {
  const moleculesWith2Atoms = molecules.filter(
    (molecule) => molecule.atoms.length === 2 && molecule.state !== 'aqueous',
  );

  const randomMoleculeIndex = Math.floor(Math.random() * moleculesWith2Atoms.length);
  const myRandomMolecule = moleculesWith2Atoms[randomMoleculeIndex];

  const [elementName1, elementName2] = myRandomMolecule.atoms.map((el) => el.atom.symbole);
  const [elementcount1, elementcount2] = myRandomMolecule.atoms.map((el) => el.count);

  const elementMolarMass1 = atomes.find((el) => el.symbole === elementName1)!.masseAtomique;
  const elementMolarMass2 = atomes.find((el) => el.symbole === elementName2)!.masseAtomique;

  const percentageElement1 = round(
    ((elementcount1 * elementMolarMass1) / (elementcount1 * elementMolarMass1 + elementcount2 * elementMolarMass2)) *
      100,
    2,
  );
  const percentageElement2 = round(
    ((elementcount2 * elementMolarMass2) / (elementcount1 * elementMolarMass1 + elementcount2 * elementMolarMass2)) *
      100,
    2,
  );

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: myRandomMolecule.formula,
      isRightAnswer: true,
      format: 'tex',
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        const randomElementCount1 = randint(1, 6);
        const randomElementCount2 = randint(1, 6);

        const randomElement1 = randomElementCount1 === 1 ? elementName1 : `${elementName1}_${randomElementCount1}`;
        const randomElement2 = randomElementCount2 === 1 ? elementName2 : `${elementName2}_${randomElementCount2}`;

        proposition = {
          id: v4() + '',
          statement: `${randomElement1}${randomElement2}`,
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
    instruction: `Déterminer la formule brute $${elementName1}_x${elementName2}_y$ à partir de la composition centésimale $${elementName1}$ : $${percentageElement1}$ $\\%$ $${elementName2}$ : $${percentageElement2}$ $\\%$.`,
    answer: myRandomMolecule.formula,
    keys: [...myRandomMolecule.atoms.map((el) => el.atom.name), 'underscore'],
    getPropositions,
    answerFormat: 'tex',
  };
  return question;
}
