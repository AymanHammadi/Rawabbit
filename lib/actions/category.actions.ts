"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
  GetAllCategoriesParams,
  GetContentsByCategoryIdParams,
  GetTopInteractedCategoriesParams,
} from "./shared.types";
import Category, { ICategory } from "@/database/category.model";
import Content from "@/database/content.model";
import { FilterQuery } from "mongoose";

export async function getTopInteractedCategories(params: GetTopInteractedCategoriesParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    // Find interactions for the user and group by Categories...
    // Interaction...

    return [
      { _id: "1", name: "category" },
      { _id: "2", name: "category2" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllCategories(params: GetAllCategoriesParams) {
  try {
    connectToDatabase();

    const { searchQuery, filter, page = 1, pageSize = 10 } = params;
    const skipAmount = (page - 1) * pageSize;

    const query: FilterQuery<typeof Category> = {};

    if (searchQuery) {
      query.$or = [{ name: { $regex: new RegExp(searchQuery, "i") } }];
    }

    let sortOptions = {};

    switch (filter) {
      case "popular":
        sortOptions = { contents: -1 };
        break;
      case "recent":
        sortOptions = { createdAt: -1 };
        break;
      case "name":
        sortOptions = { name: 1 };
        break;
      case "old":
        sortOptions = { createdAt: 1 };
        break;

      default:
        break;
    }

    const totalCategories = await Category.countDocuments(query);

    const categories = await Category.find(query)
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize);

    const isNext = totalCategories > skipAmount + categories.length;

    return { categories, isNext };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getContentsByCategoryId(params: GetContentsByCategoryIdParams) {
  try {
    connectToDatabase();

    const { categoryId, page = 1, pageSize = 10, searchQuery } = params;
    const skipAmount = (page - 1) * pageSize;

    const categoryFilter: FilterQuery<ICategory> = { _id: categoryId };

    const category = await Category.findOne(categoryFilter).populate({
      path: "contents",
      model: Content,
      match: searchQuery
        ? { title: { $regex: searchQuery, $options: "i" } }
        : {},
      options: {
        sort: { createdAt: -1 },
        skip: skipAmount,
        limit: pageSize + 1, // +1 to check if there is next page
      },
      populate: [
        { path: "categories", model: Category, select: "_id name" },
        { path: "author", model: User, select: "_id clerkId name picture" },
      ],
    });

    if (!category) {
      throw new Error("Category not found");
    }

    const isNext = category.contents.length > pageSize;

    const contents = category.contents;

    return { categoryTitle: category.name, contents, isNext };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getTopPopularCategories() {
  try {
    connectToDatabase();

    const popularCategories = await Category.aggregate([
      { $project: { name: 1, numberOfContents: { $size: "$contents" } } },
      { $sort: { numberOfContents: -1 } },
      { $limit: 5 },
    ]);

    return popularCategories;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
