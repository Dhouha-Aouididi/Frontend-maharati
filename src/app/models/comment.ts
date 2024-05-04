export interface Comment {
  id: number;
  user_id: number;
  service_id: number;
  commentText: string;
  rating: number;
  // Additional comment properties
  User: {
    id: number,
    username: string
}
}