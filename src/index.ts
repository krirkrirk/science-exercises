import { exercises } from './exercises/exercises';
import { molecules } from './exercises/utils/molecularChemistry/molecule';

const allScienceExercises = [...exercises];
exercises.forEach((exo) => {
  console.log(exo.generator(1)[0]);
});
export { allScienceExercises };
