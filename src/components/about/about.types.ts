import { AboutComponentSchema } from "@/lib/schema";
import { z } from "zod";

export type AboutComponentType = z.infer<typeof AboutComponentSchema>;