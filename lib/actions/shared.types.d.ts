import { Schema } from "mongoose";

import { IUser } from "@/mongodb";

export interface CreateAnswerParams {
  content: string;
  author: string; // User ID
  content: string; // Content ID
  path: string;
}

export interface GetAnswersParams {
  contentId: string;
  sortBy?: string;
  page?: number;
  pageSize?: number;
}

export interface AnswerVoteParams {
  answerId: string;
  userId: string;
  hasupVoted: boolean;
  hasdownVoted: boolean;
  path: string;
}

export interface DeleteAnswerParams {
  answerId: string;
  path: string;
}

export interface SearchParams {
  query?: string | null;
  type?: string | null;
}

export interface RecommendedParams {
  userId: string;
  page?: number;
  pageSize?: number;
  searchQuery?: string;
}

export interface ViewContentParams {
  contentId: string;
  userId: string | undefined;
}

export interface JobFilterParams {
  query: string;
  page: string;
}

export interface GetContentsParams {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
}

export interface CreateContentParams {
  title: string;
  content: string;
  categoriess: string[];
  author: Schema.Types.ObjectId | IUser;
  path: string;
}

export interface GetContentByIdParams {
  contentId: string;
}

export interface ContentVoteParams {
  contentId: string;
  userId: string;
  hasupVoted: boolean;
  hasdownVoted: boolean;
  path: string;
}

export interface DeleteContentParams {
  contentId: string;
  path: string;
}

export interface EditContentParams {
  contentId: string;
  title: string;
  content: string;
  path: string;
}

export interface GetAllCategoriesParams {
  page?: number;
  pageSize?: number;
  filter?: string;
  searchQuery?: string;
}

export interface GetContentsByCategoryIdParams {
  categoryId: string;
  page?: number;
  pageSize?: number;
  searchQuery?: string;
}

export interface GetTopInteractedCategoriesParams {
  userId: string;
  limit?: number;
}

export interface CreateUserParams {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

export interface GetUserByIdParams {
  userId: string;
}

export interface GetAllUsersParams {
  page?: number;
  pageSize?: number;
  filter?: string;
  searchQuery?: string; // Add searchQuery parameter
}

export interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<IUser>;
  path: string;
}

export interface ToggleSaveContentParams {
  userId: string;
  contentId: string;
  path: string;
}

export interface GetSavedContentsParams {
  clerkId: string;
  page?: number;
  pageSize?: number;
  filter?: string;
  searchQuery?: string;
}

export interface GetUserStatsParams {
  userId: string;
  page?: number;
  pageSize?: number;
}

export interface DeleteUserParams {
  clerkId: string;
}
