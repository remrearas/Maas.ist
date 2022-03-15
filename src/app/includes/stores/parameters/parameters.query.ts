import { QueryEntity } from '@datorama/akita';
import { ParametersState, ParametersStore } from './parameters.store';
import {Injectable} from "@angular/core";

@Injectable()
export class ParametersQuery extends QueryEntity<ParametersState> {
  constructor(protected override store: ParametersStore) {
    super(store);
  }
}
