import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class UserService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(
    public http: HttpClient
  ) { }

  //NEW ROLE DATA TO BE PUSHED IN LIST - OBSERVABLE.
  private newUserDataSource = new Subject<User>();
  newUserData$ = this.newUserDataSource.asObservable();

  sendNewUserData(userData: User) {
    console.log(userData);
    this.newUserDataSource.next(userData);
  }

  getNewUserData(): Observable<User> {
    return this.newUserData$;
  }

  gerUser() {
    return this.http.get('http://localhost:3000/users').pipe(map((res: any) => { 
    return res }));
  }

  addUser(user:User) {
    return this.http.post('http://localhost:3000/users', user).pipe(map((res: any) => { return res }));
  }
  deleteUser(id: number) {
    return this.http.delete('http://localhost:3000/users/' + id)
      .pipe(map((res: any) => { return res.json() }));
  }
  updateUser(users :User, id:number) {
    return this.http.put('http://localhost:3000/users/' + id, users)
    .pipe(map((res: any) => { return res.json() }));
  }
}
