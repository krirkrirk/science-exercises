import { KeyId } from '#root/types/keyId';
import { uuid } from 'uuidv4';

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
