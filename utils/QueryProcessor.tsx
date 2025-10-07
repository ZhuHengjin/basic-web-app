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

  if (normalizedQuery.includes("which of the following numbers is the largest")) {
    const matches = query.match(/-?\d+(?:\.\d+)?/g);
    if (matches && matches.length >= 3) {
      const values = matches.slice(0, 3).map((value) => parseFloat(value));
      if (values.every((value) => !Number.isNaN(value))) {
        const labels: Array<"x" | "y" | "z"> = ["x", "y", "z"];
        const maxValue = Math.max(...values);
        const maxIndices = values
          .map((value, index) => ({ value, index }))
          .filter((entry) => entry.value === maxValue)
          .map((entry) => entry.index);

        if (maxIndices.length > 1) {
          return "There is a tie for the largest value.";
        }

        const chosenIndex = maxIndices[0];
        const chosenLabel = labels[chosenIndex];

        if (normalizedQuery.includes(chosenLabel)) {
          return chosenLabel;
        }

        return maxValue.toString();
      }
    }

    return "I could not determine distinct numeric values for x, y, and z.";
  }

  return "";
}
