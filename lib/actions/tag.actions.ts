"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams } from "./shared.types";
import Tag from "@/database/tag.model";

export async function getTopInteractedTags(params: any) {
  try {
    connectToDatabase();
    // eslint-disable-next-line no-unused-vars
    const { userId, limit = 3 } = params;
    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    return [
      {
        _id: "1",
        name: "Tag 1",
      },
      {
        _id: "2",
        name: "Tag 2",
      },
      {
        _id: "3",
        name: "Tag 3",
      },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();
    const tags = await Tag.find({});
    return { tags };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
