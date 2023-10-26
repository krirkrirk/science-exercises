import { KeyId } from '#root/types/keyId';
import { uuid } from 'uuidv4';
import { shuffle } from './utils/shuffle';

export const tryToAddWrongProp = (props: Proposition[], statement: string, format: 'tex' | 'raw' = 'tex') => {
  if (!props.some((prop) => prop.statement === statement)) {
    props.push({
      id: uuid(),
      statement,
      isRightAnswer: false,
      format: format,
    });
  }
};

export const shuffleProps = (props: Proposition[], n: number) => {
  return shuffle([props[0], ...shuffle(props.slice(1)).slice(0, n - 1)]);
};

export type GeneratorOptions = {};

export type Proposition = {
  id: string;
  statement: string;
  isRightAnswer: boolean;
  format: 'tex' | 'raw';
};
export interface Question {
  instruction?: string;
  startStatement?: string;
  answer: string;
  answerFormat: 'tex' | 'raw';
  keys?: KeyId[];
  commands?: string[];
  coords?: number[];
  options?: any;
  getPropositions: (n: number) => Proposition[];
}

export interface ScienceExercise {
  id: string;
  instruction: string;
  isSingleStep: boolean;
  label: string;
  sections: ScienceSection[];
  levels: ScienceLevel[];
  connector: '=' | '\\iff' | '\\approx';
  keys?: KeyId[];
  generator(nb: number, options?: GeneratorOptions): Question[];
  subject: 'Chimie' | 'Physique';
  answerType?: 'QCM' | 'free';
  qcmTimer: number;
  freeTimer: number;
  maxAllowedQuestions?: number;
}

export type ScienceLevel = '6ème' | '5ème' | '4ème' | '3ème' | '2nde' | '1reSpé' | 'Term';

export type ScienceSection =
  | 'Réaction chimique'
  | 'Chimie des solutions'
  | 'Chimie organique'
  | 'Mécanique'
  | 'Lumière'
  | 'Acide / Base'
  | 'Constitution et transformations de la matière'
  | 'Ondes';
