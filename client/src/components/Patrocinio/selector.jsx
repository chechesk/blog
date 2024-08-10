// src/components/selector.js
import { createSelector } from 'reselect';

const getSponsore = (state) => state.sponsore.sponsore;
const getType = (state, type) => type;

export const getSponsoreByType = createSelector(
  [getSponsore, getType],
  (sponsore, type) => sponsore.filter(item => item.Type_Sponsore.Name === type && item.Active)
);