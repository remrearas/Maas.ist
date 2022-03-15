import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {ResultsService} from "../stores/results/results.service";

@Injectable()
export class ResultsGuard implements CanActivate {
  constructor(private router: Router, private service: ResultsService ) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    return this.service.hasActiveResults();
  }
}
