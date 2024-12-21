// app/providers.js
"use client";

import React from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "always",
  });
}
export function CSPostHogProvider({ children }: React.PropsWithChildren) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
