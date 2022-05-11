import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type QuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Question {
  readonly id: string;
  readonly Category?: string | null;
  readonly Points?: string | null;
  readonly ActualQuestion?: string | null;
  readonly Answer?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Question, QuestionMetaData>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question, QuestionMetaData>) => MutableModel<Question, QuestionMetaData> | void): Question;
}