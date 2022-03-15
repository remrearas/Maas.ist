import { QueryEntity } from '@datorama/akita';
import { ResultsState, ResultsStore } from './results.store';
import {Injectable} from "@angular/core";

@Injectable()
export class ResultsQuery extends QueryEntity<ResultsState> {
  constructor(protected override store: ResultsStore) {
    super(store);
  }
}
