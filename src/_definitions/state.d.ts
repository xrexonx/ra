import { User } from "./data";

export interface AppState {
    user: UserState
}

interface UserState {
    items: User[];
    loading: boolean;
    error: string[]
}