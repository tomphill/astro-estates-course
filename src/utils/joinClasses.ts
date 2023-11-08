export const joinClasses = (...classes: string[]) =>
  classes.filter((c) => !!c).join(" ");
