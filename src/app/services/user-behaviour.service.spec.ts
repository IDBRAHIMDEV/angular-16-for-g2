import { TestBed } from '@angular/core/testing';

import { UserBehaviourService } from './user-behaviour.service';

describe('UserBehaviourService', () => {
  let service: UserBehaviourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBehaviourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
