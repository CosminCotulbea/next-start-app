import { createSelector } from '@reduxjs/toolkit';

const userBaseSelector = state => state.user;
const userNameSelector = state => userBaseSelector(state).data.name;

const userParsedNameSelector = () => createSelector(
    userNameSelector,
    name => 'Mr.' + name
);

export {
    userBaseSelector,
    userNameSelector,
    userParsedNameSelector
}
