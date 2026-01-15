import { WhatCanShareComponentSchema } from "@/lib/schema";
import { z } from "zod";

export type WhatCanShareComponentType = z.infer<typeof WhatCanShareComponentSchema>;
