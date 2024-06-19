"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export async function getTopInteractedTags(params: any) {
  try {
    connectToDatabase();
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
