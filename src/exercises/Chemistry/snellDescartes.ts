import { Exercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { randint } from '#root/exercises/utils/math/random/randint';
import { shuffle } from '#root/exercises/utils/shuffle';
import { v4 } from 'uuid';

export const snellDescartes: Exercise = {
  id: 'snellDescartes',
  connector: '\\iff',
  instruction: '',
  label: 'Utiliser la loi de Snell-Descartes pour calculer un angle de réfraction',
  levels: ['4ème', '3ème', '2nde'],
  sections: ['Lumière'],
  subject: 'Physique',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getSnellDescartes, nb),
  keys: [],
};

export function getSnellDescartes(): Question {
  const refractionIndex = [
    { Material: "l'air", Material2: "d'air", Material3: "de l'air", n: 1 },
    { Material: "l'eau", Material2: "d'eau", Material3: "de l'eau", n: 1.33 },
    { Material: "l'Ethanol", Material2: 'en Ethanol', Material3: "de l'Ethanol", n: 1.36 },
    { Material: "l'huile d'olive", Material2: "d'huile d'olive", Material3: "de l'huile d'olive", n: 1.47 },
    { Material: 'la glace', Material2: 'de glace', Material3: 'de la glace', n: 1.31 },
    { Material: 'le soda', Material2: 'de soda', Material3: 'du soda', n: 1.46 },
    { Material: 'le plexiglas', Material2: 'en plexiglas', Material3: 'du plexiglas', n: 1.49 },
    { Material: 'le verre crown', Material2: 'en verre crown', Material3: 'du verre crown', n: 1.52 },
    { Material: 'le verre flint', Material2: 'en verre flint', Material3: 'du verre flint', n: 1.66 },
    { Material: 'le diamant', Material2: 'en diamant', Material3: 'du diamant', n: 2.417 },
  ];

  const randomMaterial1 = randint(0, refractionIndex.length - 1);
  const randomMaterial2 = randint(randomMaterial1 + 1, refractionIndex.length);

  const n1 = refractionIndex[randomMaterial1].n;
  const n2 = refractionIndex[randomMaterial2].n;
  const ramdonAngleIncidenceDeg = randint(10, 90);

  const instruction = `Un rayon de lumière se propage dans ${refractionIndex[randomMaterial1].Material} (n1 ≈ ${n1}) et atteint une surface ${refractionIndex[randomMaterial2].Material2}
  (n2 ≈ ${n2}) sous un angle d'incidence de ${ramdonAngleIncidenceDeg} degrés. $\\\\$ Calculer l'angle de
  réfraction de la lumière à l'intérieur ${refractionIndex[randomMaterial2].Material3} en utilisant la loi de Snell-Descartes.`;

  const angleIncidenceRad = (ramdonAngleIncidenceDeg * Math.PI) / 180;

  // Calculer l'angle de réfraction en radians
  const angleRefractionRad = Math.asin((n1 / n2) * Math.sin(angleIncidenceRad));

  // Convertir l'angle de réfraction de radians à degrés
  const angleRefractionDeg = (angleRefractionRad * 180) / Math.PI;

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: `${angleRefractionDeg.toFixed(1)}  °`,
      isRightAnswer: true,
      format: 'tex',
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        proposition = {
          id: v4() + '',
          statement: (randint(100, 900) / 10).toFixed(1) + '°',
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
    answer: `${angleRefractionDeg.toFixed(1)}°`,
    keys: ['sin', 'arcsin', 'degree'],
    getPropositions,
    answerFormat: 'tex',
  };
  return question;
}
