import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from './user.service';
import {DataService} from '../shared/data.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [UserService, DataService]
    })
    .compileComponents(); //this is not needed when using webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', function () {
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name)
  });

  it('should display the user name if user is logged', function () {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(component.user.name);
  });

  it('should not display the user name if user is not logged in', function () {
    const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('User not logged in');
    // expect(compiled.querySelector('p').textContent).toContain('Please log in first');
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name); //this is correct
  });

  it('shouldn\'t fetch data successfully if not called asynchronously' , function () {
    let dataService = fixture.debugElement.injector.get(DataService);
      let spy = spyOn(dataService, 'getDetails')
        .and.returnValue(Promise.resolve('Data'));
      fixture.detectChanges();
      expect(component.data).toBe(undefined);
  });
});
