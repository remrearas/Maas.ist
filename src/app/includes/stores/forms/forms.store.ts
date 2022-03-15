import { Store, StoreConfig } from '@datorama/akita';

export interface FormsState {
  meta: any;
  wage: any;
}

export function createInitialState(): FormsState {
  return {
    meta: null,
    wage: null
  };
}

@StoreConfig({ name: 'forms' })
export class FormsStore extends Store<FormsState> {
  constructor() {
    super(createInitialState());
  }
}
