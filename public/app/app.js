import { pipe, partialize, debounceTime, takeUntil } from "./utils/operators.js";
import { notasService as service } from "./nota/service.js";
import './utils/array-helpers.js';

const operations = pipe(
  partialize(takeUntil, 3),
  partialize(debounceTime, 500)
);

document.querySelector('#myButton')
  .onclick = operations(() =>
    service
      .sumItems('2143')
      .then(console.log)
      .catch(console.log)
  );