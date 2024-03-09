/**
 * 2469. Convert the Temperature
 * https://leetcode.com/problems/convert-the-temperature
 */
export function convertTemperature(celsius: number): number[] {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32.0;
  return [kelvin, fahrenheit];
}
