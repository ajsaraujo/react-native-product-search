export default (floatStr: string): number => {
  return Number(floatStr.replace("$", ""));
};
