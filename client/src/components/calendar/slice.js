import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import componentInitialState from '../componentsInitialState';
import fetchWithTimeout from '../../utils/fetchWithTimeout';

export const initialState = {
	events: [],
	...componentInitialState
};

export const fetchCalendarEvents = createAsyncThunk(
	'calendar/fetchCalendarEvents',
	async () => {
		const response = await fetchWithTimeout( 'http://localhost:5000/calendar' );
		const events = await response.json();

		const parsed = events.map( item => ({
			name: item.summary,
			start: item.start.date || item.start.dateTime,
			end: item.end.date || item.end.dateTime,
			isAllDay: !!item.start.date
		}) );

		return parsed;
	}
);

export const fetchSuccessful = fetchCalendarEvents.fulfilled;
export const fetchPending = fetchCalendarEvents.pending;
export const fetchFailed = fetchCalendarEvents.rejected;

export const slice = createSlice({
	name: 'calendar',
	initialState: {
		events: [],
		lastFetchStatus: '-'
	},
	reducers: {
		setFetchState: ( state, action ) => {
			state.lastFetchStatus = action.payload;
		}
	},
	extraReducers: builder => {
		builder.addCase( fetchCalendarEvents.pending, ( state, action ) => {
			state.lastFetchStatus = 'fetching';
		});
		builder.addCase( fetchCalendarEvents.fulfilled, ( state, action ) => {
			state.lastFetchStatus = 'ok';
			state.events = action.payload;
		});
		builder.addCase( fetchCalendarEvents.rejected, ( state, action ) => {
			state.lastFetchStatus = 'error';
		});
	}
});
export const { setFetchState, loadEvents } = slice.actions;
export default slice.reducer;