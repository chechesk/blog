import { createSelector } from 'reselect';

const getSponsoreData = (state) => state.sponsore.sponsore;
const getType = (_, type) => type;

export const getSponsoreByType = createSelector(
  [getSponsoreData, getType],
  (sponsoreData, type) => sponsoreData.filter(sponsor => sponsor.Type === type)
);