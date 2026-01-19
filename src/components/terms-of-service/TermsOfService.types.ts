import { TermsOfServiceComponentSchema } from "@/lib/schema";
import { z } from "zod";

export type TermsOfServiceComponentType = z.infer<typeof TermsOfServiceComponentSchema>;