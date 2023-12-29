import { KeyId } from '#root/types/keyId';
import { uuid } from 'uuidv4';
import { shuffle } from './utils/shuffle';

export const addValidProp = (props: Proposition[], statement: string, format: 'tex' | 'raw' = 'tex') => {
  props.push({
    id: uuid(),
    statement,
    isRightAnswer: true,
    format: format,
  });
};
export const addWrongProp = (props: Proposition[], statement: string, format: 'tex' | 'raw' = 'tex') => {
  props.push({
    id: uuid(),
    statement,
    isRightAnswer: false,
    format: format,
  });
};

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

export type Proposition = {
  id: string;
  statement: string;
  isRightAnswer: boolean;
  format: 'tex' | 'raw';
};
export interface Question<TIdentifiers = {}> {
  instruction: string;
  startStatement?: string;
  answer: string;
  answerFormat: 'tex' | 'raw';
  keys?: KeyId[];
  commands?: string[];
  coords?: number[];
  options?: any;
  divisionFormat?: 'fraction' | 'obelus';
  identifiers: TIdentifiers;
}

export type QCMGenerator<TIdentifiers> = (n: number, args: { answer: string } & TIdentifiers) => Proposition[];
export type VEA<TIdentifiers> = (studentAnswer: string, args: { answer: string } & TIdentifiers) => boolean;
export type QuestionGenerator<TIdentifiers = {}, TOptions = {}> = (opts?: TOptions) => Question<TIdentifiers>;
export interface ScienceExercise<TIdentifiers = {}> {
  id: string;
  isSingleStep: boolean;
  label: string;
  sections: ScienceSection[];
  levels: ScienceLevel[];
  connector?: '=' | '\\iff' | '\\approx';
  generator: (n: number) => Question<TIdentifiers>[];
  maxAllowedQuestions?: number;
  answerType?: 'QCM' | 'free';
  subject: 'Chimie' | 'Physique';
  qcmTimer: number;
  freeTimer: number;
  getPropositions?: QCMGenerator<{ answer: string } & TIdentifiers>;
  isAnswerValid?: VEA<TIdentifiers>;
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
