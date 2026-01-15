import { PrivacyComponentSchema  } from "@/lib/schema";
import { z } from "zod";

export type PrivacyComponentType = z.infer<typeof PrivacyComponentSchema>;