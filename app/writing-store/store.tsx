import { store } from '../types/interface';
import Boy_With_Luv from './music/Boy_With_Lov';
import Last_Night from './music/Last_Night';

const store: store[] = [Boy_With_Luv, Last_Night];

function toMap(arr: store[]) {
  return new Map(
    arr.map((obj, idx) => {
      obj['id'] = idx;
      return [idx, obj];
    })
  );
}

export const writingMap = toMap(store);
export const writingArr = store.map((el, idx) => {
  el['id'] = idx;
  return el;
});
