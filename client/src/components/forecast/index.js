import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions to dispatch
import { loadForecast } from './reducers';

// import styled from 'styled-components/macro';
import Widget from '../../containers/widget';

// const ForecastData = styled.div`
// 	display: grid;
// 	grid-template-columns: repeat(7, 1fr);
// 	justify-content: space-between;
// 	grid-gap: 10px;
// 	width: 100%;
// `;

// const ForecastDay = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	text-align: center;

// 	span {
// 		height: 20px;
// 		display: block;
// 	}
// 	span div {
// 		display: inline;
// 	}
// `;

// const Icon = styled.div`
// display: block;
// width: 100%;
// height: 0;
// padding-top: 100%;
// position: relative;

// img {
// 	position: absolute;
// 	width: 100%;
// 	top: 0;
// 	left:0;
// }
// `;

const Forecast = () => {
	const dispatch = useDispatch();
	const { data, lastFetchStatus } = useSelector( state => state.forecast );

	useEffect( () => {
		dispatch( loadForecast() );
		// const intervalId = setInterval(() => {
		// 	loadForecast();
		// }, 600000);

		// return () => clearInterval(intervalId);
	}, [ dispatch ] );

	return (
		<Widget title="Forecast" lastUpdated={new Date().toLocaleString()} onUpdateClick={loadForecast} lastFetchStatus={lastFetchStatus}>
			<div className="forecast-data">
				{data.map( ( item, index ) => {
					return ( <div className="forecast-day" key={index}>
						<span>{item.day}</span>
						<div className="icon"><img src={item.icon} alt={item.day} /></div>
						<span>{item.temp}{!!item.temp && <div>&deg;C</div>}</span>
					</div> );
				})}
			</div>
		</Widget>
	);
};

// const mapStateToProps = state => ({
// 	forecast: state.forecast.data,
// 	lastFetchStatus: state.forecast.lastFetchStatus
// })
// const mapDispatchToProps = dispatch => ({
// 	loadForecast: () => dispatch(loadForecast())
// });

export default Forecast;
