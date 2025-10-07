export default function QueryProcessor(query: string): string {
  const normalizedQuery = query.toLowerCase();

  if (normalizedQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (normalizedQuery.includes("andrew id")) {
    return "hengjinz";
  }

  if (normalizedQuery.includes("name")) {
    return "henryzhu";
  }

  return "";
}
