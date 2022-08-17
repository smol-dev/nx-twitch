import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  Emoticon,
  FFZResponse,
  RoomEmotes,
  Emote7Tv,
  BttvResponse,
  UiEmote,
} from '@nxt-emotes/model';

export const FFZ_URL = 'https://api.frankerfacez.com/v1';
export const BTTV_URL = 'https://api.betterttv.net/3/cached';
export const SEVENTV_URL = 'https://api.7tv.app/v2';

@Injectable({
  providedIn: 'root',
})
export class EmoteService {
  constructor(private http: HttpClient) {}

  getFfz(channel: string): Observable<UiEmote[]> {
    return this.http.get<FFZResponse>(`${FFZ_URL}/room/${channel}`).pipe(
      map((res: FFZResponse) => res.sets),
      map((sets: { [key: string]: RoomEmotes }) => {
        const res: Emoticon[] = [];
        Object.keys(sets).forEach((el) => {
          const emoticons = sets[el].emoticons;
          res.push(...emoticons);
        });
        return res;
      }),
      map((res) => this.mapFfzEmotes(res)),
      catchError((e) => {
        console.warn(e);
        return of([]);
      })
    );
  }

  getSevenTv(channel: string): Observable<UiEmote[]> {
    return this.http
      .get<Emote7Tv[]>(`${SEVENTV_URL}/users/${channel}/emotes`)
      .pipe(
        map((res) => this.map7tvEmotes(res)),
        catchError((e) => {
          console.warn(e);
          return of([]);
        })
      );
  }

  getBttv(id: string): Observable<UiEmote[]> {
    return this.http.get<BttvResponse>(`${BTTV_URL}/users/twitch/${id}`).pipe(
      map((res) => this.mapBttvEmotes(res)),
      catchError((e) => {
        console.warn(e);
        return of([]);
      })
    );
  }

  mapBttvEmotes({ channelEmotes, sharedEmotes }: BttvResponse): UiEmote[] {
    return channelEmotes.concat(sharedEmotes).map<UiEmote>((emote) => ({
      url: `https://cdn.betterttv.net/emote/${emote.id}`,
      type: 'bttv',
      name: emote.code,
      emote,
    }));
  }

  mapFfzEmotes(res: Emoticon[]): UiEmote[] {
    return res.map<UiEmote>((emote) => ({
      url: `https://cdn.frankerfacez.com/emote/${emote.id}`,
      type: 'ffz',
      name: emote.name,
      emote,
    }));
  }

  map7tvEmotes(res: Emote7Tv[]): UiEmote[] {
    return res.map<UiEmote>((emote) => ({
      url: `https://cdn.7tv.app/emote/${emote.id}`,
      type: '7tv',
      name: emote.name,
      emote,
    }));
  }
}
