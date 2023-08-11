import { Exercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { round } from '#root/exercises/utils/math/round';
import { atomes } from '#root/exercises/utils/molecularChemistry/atome';
import { molecules } from '#root/exercises/utils/molecularChemistry/molecule';
import { shuffle } from '#root/exercises/utils/shuffle';
import { v4 } from 'uuid';

export const molarQuantity: Exercise = {
  id: 'molarQuantity',
  connector: '=',
  instruction: '',
  label: 'Calcul de la quantité de matière',
  levels: ['4', '3', '2'],
  section: 'Constitution et transformations de la matière',
  subject: 'Chimie',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getMolarQuantityQuestion, nb),
  keys: [],
};

export function getMolarQuantityQuestion(): Question {
  const mG = round(Math.random() * 150 + 50, 0); // Masse de l'échantillon en g (entre 50 et 200 g)

  const moleculesSolid = molecules.filter((molecule) => molecule.state === 'solid');
  const randomMoleculeIndex = Math.floor(Math.random() * moleculesSolid.length);
  const myRandomMolecule = moleculesSolid[randomMoleculeIndex];
  const molarMassG = round(myRandomMolecule.weight, 2); // Masse molaire en g/mol

  const nG = mG / molarMassG;

  const myAtoms = myRandomMolecule.atoms.map((el) => el.name);
  const myAtomsMolarMass = myAtoms.map((atome) => {
    return atomes.find((el) => el.symbole === atome)?.masseAtomique;
  });

  const res = myAtomsMolarMass
    .map((molarMass, index) => `$M_{(${myRandomMolecule.atoms[index].name})}$ = $${molarMass?.toFixed(0)}$ $g/mol$ ; `)
    .join('');

  const instruction = `Un échantillon de ${myRandomMolecule.name} $${myRandomMolecule.formula}$ a une masse de ${mG} g. 
  Déterminer la quantité de matière $n$ contenue dans cet échantillon de ${myRandomMolecule.name}. 
  $\\\\$ On donne : ${res}`;

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: round(nG, 2) + '\\ mol',
      isRightAnswer: true,
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        proposition = {
          id: v4() + '',
          statement: round(Math.random() * 5, 2) + '\\ mol',
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
    startStatement: 'n',
    answer: `${round(nG, 2)}\\ mol`,
    keys: ['mol'],
    getPropositions,
  };
  return question;
}
