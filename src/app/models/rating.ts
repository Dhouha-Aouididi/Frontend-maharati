export interface Rating {
    id: string; // Unique identifier for the rating
    userId: string; // ID of the user who rated the service
    serviceId: string; // ID of the service being rated
    rating: number; // Numeric value of the rating (e.g., 1 to 5 stars)
    createdAt?: Date; // Date and time when the rating was created
    updatedAt?: Date; // Date and time when the rating was last updated
  }
  