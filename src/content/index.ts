import type { TEvent, TSermon, TMinistry } from "@/types/content";

import eventsData from "./events.json";
import ministriesData from "./ministries.json";

import aCruzEoEvangelho from "./sermons/a-cruz-e-o-evangelho.md?raw";
import vivendoPelaFe from "./sermons/vivendo-pela-fe.md?raw";
import oPoderDaOracao from "./sermons/o-poder-da-oracao.md?raw";

import sobrePage from "./pages/sobre.md?raw";

function parseFrontmatter(content: string): {
  frontmatter: Record<string, unknown>;
  content: string;
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content };
  }

  const frontmatterStr = match[1];
  const markdownContent = match[2];

  const frontmatter: Record<string, unknown> = {};
  frontmatterStr.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) return;

    const key = line.slice(0, colonIndex).trim();
    let value: unknown = line.slice(colonIndex + 1).trim();

    if (
      typeof value === "string" &&
      value.startsWith('"') &&
      value.endsWith('"')
    ) {
      value = value.slice(1, -1);
    }

    if (
      typeof value === "string" &&
      value.startsWith("[") &&
      value.endsWith("]")
    ) {
      try {
        value = JSON.parse(value);
      } catch {
        // Keep as string if parsing fails
      }
    }

    if (typeof value === "string" && !isNaN(Number(value)) && value !== "") {
      value = Number(value);
    }

    frontmatter[key] = value;
  });

  return { frontmatter, content: markdownContent };
}

function createSermon(slug: string, rawContent: string): TSermon {
  const { frontmatter, content } = parseFrontmatter(rawContent);

  return {
    slug,
    title: (frontmatter.title as string) || "",
    speaker: (frontmatter.speaker as string) || "",
    date: (frontmatter.date as string) || "",
    duration: frontmatter.duration as number | undefined,
    videoURL: frontmatter.videoURL as string | undefined,
    series: frontmatter.series as string | undefined,
    tags: frontmatter.tags as string[] | undefined,
    description: frontmatter.description as string | undefined,
    content,
  };
}

export const events: TEvent[] = eventsData;

export const sermons: TSermon[] = [
  createSermon("a-cruz-e-o-evangelho", aCruzEoEvangelho),
  createSermon("vivendo-pela-fe", vivendoPelaFe),
  createSermon("o-poder-da-oracao", oPoderDaOracao),
];

export const ministries: TMinistry[] = ministriesData;

export const pages = {
  sobre: sobrePage.replace(/^---[\s\S]*?---\n/, ""),
};

export function getEventById(id: string): TEvent | undefined {
  return events.find((event) => event.id === id);
}

export function getSermonBySlug(slug: string): TSermon | undefined {
  return sermons.find((sermon) => sermon.slug === slug);
}

export function getUpcomingEvents(limit?: number): TEvent[] {
  const now = new Date();
  const upcoming = events
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getRecentSermons(limit?: number): TSermon[] {
  const sorted = [...sermons].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return limit ? sorted.slice(0, limit) : sorted;
}
