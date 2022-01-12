/**
 * Filters out falsy values for class names
 *
 * @param classes the array of class strings and possible falsy values
 * @returns the array of string classes
 */
export default function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
