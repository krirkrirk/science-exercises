import { Exercise, ScienceSection } from './exercises/exercise';
import { exercises } from './exercises/exercises';
// import { molecules } from './exercises/utils/molecularChemistry/molecule';

const allScienceExercises = [...exercises];

const getAllScienceExercisesBySection = () => {
  const data: { section: ScienceSection; exos: Exercise[] }[] = [];

  allScienceExercises.forEach((exo) => {
    const sectionsData = data.filter((el) => exo.sections.includes(el.section));
    if (!sectionsData.length) {
      exo.sections.forEach((section) =>
        data.push({
          section,
          exos: [exo],
        }),
      );
    } else {
      sectionsData.forEach((sectionData) => {
        data.find((d) => d.section === sectionData.section)?.exos.push(exo);
      });
    }
  });
  return data;
};

export { allScienceExercises, getAllScienceExercisesBySection };
