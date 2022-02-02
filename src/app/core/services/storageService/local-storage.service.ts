import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  async get(key: string): Promise<any> {
    return localStorage ? localStorage.getItem(key) : null;
  }

  async set(key: string, value: any): Promise<void> {
    if (localStorage) {
      localStorage.setItem(key, value);
    }
  }
}
