import { Exercise, Proposition, Question } from '#root/exercises/exercise';
import { getDistinctQuestions } from '#root/exercises/utils/getDistinctQuestions';
import { randint } from '#root/exercises/utils/math/random/randint';
import { round } from '#root/exercises/utils/math/round';
import { shuffle } from '#root/exercises/utils/shuffle';
import { v4 } from 'uuid';

export const perceivedFrequency: Exercise = {
  id: 'perceivedFrequency',
  connector: '\\iff',
  instruction: '',
  label: 'Calculer une fréquence perçue par un observateur',
  levels: ['4', '3', '2'],
  section: 'Ondes',
  subject: 'Physique',
  isSingleStep: true,
  generator: (nb: number) => getDistinctQuestions(getPerceivedFrequency, nb),
  keys: [],
};

export function getPerceivedFrequency(): Question {
  const frequencyEmitted = randint(200, 1500); // Fréquence émise en Hz
  const soundSpeed = 340; // Vitesse du son dans l'air en m/s
  const observerSpeed = 0; // La vitesse de l'observateur est supposée être nulle (observateur immobile)
  const ambulanceSpeed = Math.floor(Math.random() * 40 + 10); // Vitesse de l'ambulance entre 10 et 50 m/s

  const perceivedFrequency = (frequencyEmitted * (soundSpeed + observerSpeed)) / (soundSpeed - ambulanceSpeed);

  const instruction = `Une ambulance émet un son d'une fréquence de $${frequencyEmitted}$ Hz lorsqu'elle
  s'approche d'un observateur à une vitesse de $${ambulanceSpeed}$ m/s. Si la vitesse du son
  dans l'air est de $340$ m/s, calculer la fréquence perçue par l'observateur.`;

  const getPropositions = (n: number) => {
    const res: Proposition[] = [];

    res.push({
      id: v4() + '',
      statement: round(perceivedFrequency, 0) + ' \\ Hz',
      isRightAnswer: true,
    });

    for (let i = 0; i < n - 1; i++) {
      let isDuplicate: boolean;
      let proposition: Proposition;

      do {
        proposition = {
          id: v4() + '',
          statement: round(perceivedFrequency * (0.3 + Math.random() * 1.5), 0) + ' \\ Hz',
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
    answer: `${round(perceivedFrequency, 0)} \\ Hz`,
    keys: ['Hz'],
    getPropositions,
  };
  return question;
}
