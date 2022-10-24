import { filter, includes, some } from 'lodash';

export function objectMap(object: any, mapFn: any) {
  return Object.keys(object).reduce(function (result, key) {
    // @ts-ignore
    result[key] = mapFn(object[key]);
    return result;
  }, {});
}

export function depthFirstSearch(collection: any, input: string): any {
  const type = typeof collection;
  if (type === 'string' || type === 'number' || type === 'boolean') {
    return includes(collection.toString().toLowerCase(), input.toString().toLowerCase());
  }
  return some(collection, (item: any) => depthFirstSearch(item, input));
}

export function internalSearch(items: any, input: string) {
  return filter(
    items,
    (item: any) => depthFirstSearch(item, input) && !['USDT', 'USDC'].includes(item.name),
  );
}
