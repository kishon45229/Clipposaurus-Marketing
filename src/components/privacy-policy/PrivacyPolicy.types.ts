import { PrivacyPolicyComponentSchema } from "@/lib/schema";
import { z } from "zod";

export type PrivacyPolicyComponentType = z.infer<typeof PrivacyPolicyComponentSchema>;