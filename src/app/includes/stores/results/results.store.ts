import {ActiveState, EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import { Results } from './results.model';

export interface ResultsState extends EntityState<Results, string>, ActiveState {}

@StoreConfig({ name: 'results', idKey: '_id' })
export class ResultsStore extends EntityStore<ResultsState> {
  constructor() {
    super() ;
  }

  override akitaPreAddEntity(newEntity: Results): Results & { _id: string; } {
    return {
      ...newEntity,
      _id: newEntity._id,
    };
  }
}
