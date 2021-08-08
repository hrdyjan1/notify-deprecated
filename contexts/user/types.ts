import {StringPromiseVoidFunction} from '../../constants/types/basics';

export type IdType = string | null;

export interface StateCtx {
  id: IdType;
}

export interface ActionCtx {
  saveId: StringPromiseVoidFunction;
}
