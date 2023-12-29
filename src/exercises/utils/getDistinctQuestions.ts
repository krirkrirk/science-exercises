import { Question } from "../exercise";

export function equalTab<T>(array1: T[], array2: T[]) {
  if (!array1 && !array2) return true;
  if (!array1 || !array2) return false;
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++)
    if (array1[i] !== array2[i]) return false;
  return true;
}

export const getDistinctQuestions = (
  generator: () => Question<any>,
  nb: number,
  max?: number,
): Question<any>[] => {
  const res: Question<any>[] = [];
  const trueStop = max === undefined ? nb : Math.min(nb, max);

  for (let i = 0; i < trueStop; i++) {
    let question: Question<any>;
    do {
      question = generator();
    } while (
      res.some(
        (q) =>
          q.instruction === question.instruction &&
          equalTab(q.commands!, question.commands!),
      )
    );
    res.push(question);
  }
  return res;
};
