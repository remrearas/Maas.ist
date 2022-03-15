import {Injectable} from "@angular/core";
import {ResultsStore} from "./results.store";
import {ResultsQuery} from "./results.query";
import {Results} from "./results.model";

@Injectable()
export class ResultsService {
  constructor(private store: ResultsStore, private query: ResultsQuery) {}

  add(data: Results) {
    this.store.add(data);
  }

  setActive(_id: string) {
    this.store.setActive(_id);
  }

  hasActiveResults(): boolean {
    return this.query.hasActive();
  }

  getActiveResults(): Results {
    return this.query.getActive();
  }

  removeActive(): void {
    return this.store.setActive(null);
  }

}
