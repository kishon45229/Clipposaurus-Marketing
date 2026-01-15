import { HowItWorksComponentSchema } from "@/lib/schema";
import { z } from "zod";

export type HowItWorksComponentType = z.infer<typeof HowItWorksComponentSchema>;