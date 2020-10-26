import * as moment from 'moment';

const sortByDateAsc = (a, b) => {
  const momentA = moment(a);
  const momentB = moment(b);

  return momentA.isAfter(momentB)
    ? 1 : momentA.isBefore(momentB)
      ? -1 : 0;
};

const sortByDateDesc = (a, b) => {
  const momentA = moment(a);
  const momentB = moment(b);

  return momentA.isAfter(momentB)
    ? -1 : momentA.isBefore(momentB)
      ? 1 : 0;
};

const sortByFloatAsc = (a, b) => {
  const floatA = parseInt(a, 10);
  const floatB = parseInt(b, 10);

  return floatA > floatB
    ? 1 : floatA < floatB
      ? -1 : 0;
};

const sortByFloatDesc = (a, b) => {
  const floatA = parseInt(a, 10);
  const floatB = parseInt(b, 10);

  return floatA > floatB
    ? -1 : floatA < floatB
      ? 1 : 0;
};

const sortAsc = (a, b) => {
  const valueA = a.trim().toLowerCase();
  const valueB = b.trim().toLowerCase();

  return valueA > valueB
    ? 1 : valueA < valueB
      ? -1 : 0;
};

const sortDesc = (a, b) => {
  const valueA = a.trim().toLowerCase();
  const valueB = b.trim().toLowerCase();

  return valueA > valueB
    ? -1 : valueA < valueB
      ? 1 : 0;
};

const createFieldSort = (ascComparator, descComparator) => (fieldName: string, direction: 'asc' | 'desc') =>
  (a: { [key: string]: number | string }, b: { [key: string]: number | string }): number => {
    return direction === 'asc'
      ? ascComparator(a[fieldName], b[fieldName])
      : descComparator(a[fieldName], b[fieldName]);
  };

const sortByDateField = createFieldSort(sortByDateAsc, sortByDateDesc);

const sortByFloatField = createFieldSort(sortByFloatAsc, sortByFloatDesc);

const sortByField = createFieldSort(sortAsc, sortDesc);

export {
  sortByDateField,
  sortByFloatField,
  sortByField,
};
