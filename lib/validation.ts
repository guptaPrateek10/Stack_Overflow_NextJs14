import { z } from "zod";

export const QuestionSchema = z.object({
  title: z.string().min(10).max(150),
  explanation: z.string().min(300),
  tags: z.array(z.string().min(3).max(15)).min(1).max(3),
});
