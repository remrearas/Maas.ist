import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Parameter } from './parameters.model';

export interface ParametersState extends EntityState<Parameter, string> { }

@StoreConfig({ name: 'parameters', idKey: '_id' })
export class ParametersStore extends EntityStore<ParametersState> {
  constructor() {
    super() ;
  }

  override akitaPreAddEntity(newEntity: Parameter): Parameter & { _id: string; } {
    return {
      ...newEntity,
      _id: newEntity.parametreYili,
    };
  }
}
