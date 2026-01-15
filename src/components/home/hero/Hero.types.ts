import { HeroComponentSchema } from "@/lib/schema";
import { z } from "zod";

export type HeroComponentType = z.infer<typeof HeroComponentSchema>;
