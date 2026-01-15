import { ComparisonComponentSchema } from "@/lib/schema";
import { z } from "zod";

export type ComparisonComponent = z.infer<typeof ComparisonComponentSchema>;