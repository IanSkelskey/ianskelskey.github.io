/**
 * All shared types live in this file.
 *
 * Keep domain types here rather than creating per-domain files — a single
 * location is easier to grep, cross-reference, and enforce discriminated
 * unions across.
 */

/** Payload returned by the demo endpoint (`public/demo-data.json`). */
export type DemoStatus = {
  service: string;
  status: "ok" | "degraded";
  message: string;
};

export type ProjectLink = { label: string; href: string };

export type DemoProject = {
  id: string;
  title: string;
  category: "Application" | "Template";
  description: string;
  featured?: boolean;
  primaryAction: ProjectLink;
  supportingActions: readonly ProjectLink[];
};
