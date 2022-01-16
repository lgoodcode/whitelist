/**
 * Filters out falsy values for class names
 *
 * @param classes the array of class strings and possible falsy values
 * @returns the array of string classes
 */
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default classNames
