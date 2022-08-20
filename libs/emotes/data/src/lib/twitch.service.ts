import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiClient, HelixUser } from '@twurple/api';
import { UiUser } from '@nxt-emotes/model';
import { ClientCredentialsAuthProvider } from '@twurple/auth';
import { ENVIRONMENT, Environment } from '@nxt/environment';

@Injectable({
  providedIn: 'root',
})
export class TwitchService {
  apiClient: ApiClient;
  constructor(
    @Inject(ENVIRONMENT) private env: Environment,
    private http: HttpClient
  ) {
    const authProvider = new ClientCredentialsAuthProvider(
      env.twitchClientId,
      env.twitchClientSecret
    );
    this.apiClient = new ApiClient({ authProvider });
  }

  getUser(username: string): Observable<UiUser> {
    return from(this.apiClient.users.getUserByName(username)).pipe(
      map((user) => this.fromHelixToUiUser(user))
    );
  }

  fromHelixToUiUserArray(users: HelixUser[]): UiUser[] {
    return users.map(this.fromHelixToUiUser);
  }
  fromHelixToUiUser(helixUser: HelixUser | null): UiUser {
    if (helixUser) {
      return {
        id: helixUser?.id ?? '',
        name: helixUser?.name ?? '',
        displayName: helixUser?.displayName ?? '',
        description: helixUser?.description ?? '',
        type: helixUser?.type ?? '',
        broadcasterType: helixUser?.broadcasterType ?? '',
        profilePictureUrl: helixUser?.profilePictureUrl ?? '',
        offlinePlaceholderUrl: helixUser?.offlinePlaceholderUrl ?? '',
        views: helixUser?.views ?? -1,
        creationDate: helixUser?.creationDate ?? new Date(),
      };
    }
    return {} as UiUser;
  }
}
