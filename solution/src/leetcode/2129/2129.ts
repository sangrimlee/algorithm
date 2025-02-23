/**
 * 2129. Capitalize the Title
 * https://leetcode.com/problems/capitalize-the-title
 */
export function capitalizeTitle(title: string): string {
  function capitalize(word: string) {
    if (word.length <= 2) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  }
  return title.split(' ').map(capitalize).join(' ');
}
