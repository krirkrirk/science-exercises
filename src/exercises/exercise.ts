// export enum Connector {
//   equal = "=",
//   equiv = "\\iff",
//   implies = "\\Rightarrow",
// }

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
  keys?: string[];
  commands?: string[];
  coords?: number[];
  options?: any;
  getPropositions: (n: number) => Proposition[];
  qcmTimer?: number;
  freeTimer?: number;
}

export interface Exercise {
  id: string;
  instruction: string;
  isSingleStep: boolean;
  label: string;
  sections: ScienceSection[];
  levels: ScienceLevel[];
  connector: '=' | '\\iff' | '\\approx';
  keys?: string[];
  generator(nb: number, options?: GeneratorOptions): Question[];
  subject: 'Chimie' | 'Physique';
  answerType?: 'QCM' | 'free';
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
