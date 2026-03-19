export type UserRole = "admin" | "user";

export interface LoggedInUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface FirestoreUserDoc {
  email: string;
  name: string;
  role: "admin" | "user";
  document?: string | null;
  city?: string | null;
  country?: string | null;
  phone?: string | null;
  userType?: string | null; // estudante | medico | professor | farmaceutico | corporacao | governo
  createdAt?: string;
}

export interface UserWithId extends FirestoreUserDoc {
  id: string;
}
