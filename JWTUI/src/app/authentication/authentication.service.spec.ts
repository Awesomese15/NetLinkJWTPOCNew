import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

const testConfig = {

  addUser: {
    positive: {
      firstName: 'test',
      lastName: 'testLast',
      userId: 'testUser',
      password: 'testPass'
    }
  },

  loginUser: {
    positive: {
      userId: 'testUser',
      password: 'testPass'
    }
  }
}

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
