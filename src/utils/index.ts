export function objectMap(object: any, mapFn: any) {
  return Object.keys(object).reduce(function (result, key) {
    // @ts-ignore
    result[key] = mapFn(object[key]);
    return result;
  }, {});
}
