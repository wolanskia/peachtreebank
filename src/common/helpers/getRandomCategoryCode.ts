import { data } from '../../data/transactions.json';

const categoryCodes = data.map(({ categoryCode }) => categoryCode);

export default (): string => categoryCodes[Math.floor(Math.random() * categoryCodes.length)];
