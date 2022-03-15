import { Query } from '@datorama/akita';
import { FormsState, FormsStore } from './forms.store';
import {Injectable} from "@angular/core";

@Injectable()
export class FormsQuery extends Query<FormsState> {
  constructor(protected override store: FormsStore) {
    super(store);
  }
}
