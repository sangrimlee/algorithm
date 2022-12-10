/**
 * 433. Minimum Genetic Mutation
 * https://leetcode.com/problems/minimum-genetic-mutation/
 */
export function minMutation(startGene: string, endGene: string, bank: string[]): number {
  const geneBank = new Set(bank);
  const changeGene = (gene: string, g: string, i: number) =>
    gene.substring(0, i) + g + gene.substring(i + 1);

  function bfs() {
    let queue: [string, number][] = [[startGene, 0]];
    const visited = new Set([startGene]);

    while (0 < queue.length) {
      const nextQueue: [string, number][] = [];

      for (const [currentGene, currentStep] of queue) {
        if (currentGene === endGene) {
          return currentStep;
        }

        for (const g of 'ACGT') {
          for (let i = 0; i < currentGene.length; i++) {
            const neighborGene = changeGene(currentGene, g, i);
            if (!visited.has(neighborGene) && geneBank.has(neighborGene)) {
              nextQueue.push([neighborGene, currentStep + 1]);
              visited.add(neighborGene);
            }
          }
        }
      }

      queue = nextQueue;
    }

    return -1;
  }

  return bfs();
}
