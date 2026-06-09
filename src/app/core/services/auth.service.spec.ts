import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ApiService } from './api.service';
import { AuthService, User } from './auth.service';

describe('AuthService session state', () => {
  const mockUser: User = {
    id: 1,
    email: 'user@realestate.com',
    fullName: 'Test User',
    mobile: '9999999999',
    role: 'USER',
    emailVerified: true,
    mobileVerified: true,
  };

  function createAuthService(): AuthService {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: ApiService, useValue: { post: () => of({}) } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
      ],
    });
    return TestBed.inject(AuthService);
  }

  afterEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  it('hydrates user when access token and user are both present', () => {
    localStorage.setItem('accessToken', 'token');
    localStorage.setItem('user', JSON.stringify(mockUser));

    const service = createAuthService();

    expect(service.isLoggedIn()).toBeTrue();
    expect(service.getRole()).toBe('USER');
  });

  it('clears stale user data when access token is missing', () => {
    localStorage.setItem('user', JSON.stringify(mockUser));
    localStorage.setItem('userRole', 'ADMIN');

    const service = createAuthService();

    expect(service.isLoggedIn()).toBeFalse();
    expect(localStorage.getItem('user')).toBeNull();
    expect(localStorage.getItem('userRole')).toBeNull();
  });

  it('clearSession removes storage and in-memory user', () => {
    localStorage.setItem('accessToken', 'token');
    localStorage.setItem('refreshToken', 'refresh');
    const service = createAuthService();
    service.updateLocalUser(mockUser);

    service.clearSession();

    expect(service.isLoggedIn()).toBeFalse();
    expect(localStorage.getItem('accessToken')).toBeNull();
    expect(localStorage.getItem('user')).toBeNull();
  });
});
