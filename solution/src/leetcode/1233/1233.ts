/**
 * 1233. Remove Sub-Folders from the Filesystem
 * https://leetcode.com/problems/remove-sub-folders-from-the-filesystem
 */
export function removeSubfolders(folders: string[]): string[] {
  const set = new Set(folders);
  return folders.filter((folder) => !isSubFolder(set, folder));
}

function isSubFolder(set: Set<string>, folder: string) {
  let endIndex = folder.lastIndexOf('/');
  while (0 < endIndex) {
    const prefix = folder.substring(0, endIndex);
    if (set.has(prefix)) {
      return true;
    }
    endIndex = prefix.lastIndexOf('/');
  }
  return false;
}
