import { BehaviorSubject } from 'rxjs';

export interface AppState {
  count: number;
  message: string;
}

export const initialState: AppState = { count: 0, message: 'Hello' };

export class AppStore {
  private _state = new BehaviorSubject<AppState>(initialState);
  public state$ = this._state.asObservable();

  get snapshot(): AppState { return this._state.value; }

  setState(next: Partial<AppState>) {
    this._state.next({ ...this._state.value, ...next });
  }
}
