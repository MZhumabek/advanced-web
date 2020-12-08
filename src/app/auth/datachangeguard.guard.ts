import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../components/contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class DatachangeguardGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(
    component: ContactComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !component.hasUnsavedData() || confirm("Unsaved data detected. Want to exit?");
  }
  
}
