import React, { useContext, useRef, useEffect } from 'react';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import YouTube from 'react-youtube';
import styled from 'styled-components';

import { useWindowSize } from '@react-hook/window-size';

import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';

function YouTubePlayer() {
	const [{ videoIsShowing, currentSong }, dispatch] = useContext(playerControllerStateContext);
	const playerRef = useRef();
	const [windowWidth, windowHeight] = useWindowSize();

	const opts = {
		controls: 450,
		cc_load_policy: 0,
		playerVars: {
			autoplay: 1,
		},
	};

	function playVideo(event) {
		return playerRef.current.internalPlayer.playVideo();
	}

	function pauseVideo(event) {
		return playerRef.current.internalPlayer.pauseVideo();
	}

	function setVolume(volumeValue) {
		return playerRef.current.internalPlayer.setVolume(volumeValue);
	}

	function seekTo(seekToValue) {
		return playerRef.current.internalPlayer.seekTo(seekToValue);
	}

	function setSize(windowWidth) {
		return playerRef.current.internalPlayer.setSize(windowWidth);
	}

	useEffect(() => {
		console.log(windowWidth);
		setSize(windowWidth, windowHeight);
	}, [windowWidth]);

	useEffect(() => {
		const interval = setInterval(async () => {
			const currentTime = await playerRef.current.internalPlayer.getCurrentTime();
			dispatch({ type: PLAYER_ACTIONS.SET_CURRENT_TIME, payload: currentTime });
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(async () => {
		const durationInMinutes = await playerRef.current.internalPlayer.getDuration();
		dispatch({ type: PLAYER_ACTIONS.SET_DURATION, payload: durationInMinutes });
	}, []);

	useEffect(() => {
		dispatch({ type: PLAYER_ACTIONS.PLAY_VIDEO, payload: playVideo });
		dispatch({ type: PLAYER_ACTIONS.PAUSE_VIDEO, payload: pauseVideo });
		dispatch({ type: PLAYER_ACTIONS.SET_VOLUME, payload: setVolume });
		dispatch({ type: PLAYER_ACTIONS.SEEK_TO, payload: seekTo });
	}, []);

	function onEndHandler() {
		dispatch({ type: PLAYER_ACTIONS.SET_SHOW_VIDEO });
		dispatch({ type: PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED, payload: false });
	}

	return (
		<IframeWrapper
			style={{ visibility: `${videoIsShowing ? 'visible' : 'hidden'}` }}
			className={'ytPlayerContainer'}
		>
			;
			<YouTube
				containerClassName={'ytplayer'}
				opts={opts}
				ref={playerRef}
				onPause={() => dispatch({ type: PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED, payload: true })}
				onPlay={() => dispatch({ type: PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED, payload: false })}
				onEnd={() => onEndHandler()}
				videoId={'lKwEswgOwuQ'}  // Change to currentSong var.
			/>
			;
			<div className={'mask-top'}>
				<h2></h2>
			</div>
			<div className={'mask-bottom'}>
				<h2>SONG NAME</h2>
			</div>
		</IframeWrapper>
	);
}

export default YouTubePlayer;

const IframeWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;


	.mask-top {
		background-color: black;
		height: 5rem;
		position: absolute;
		bottom:0rem;
		width: 100%;
		display: flex;
		justify-content: center;
		letter-spacing: 6px;
	}

	.mask-bottom {
		background-color: black;
		height: 2rem;
		position: absolute;
		bottom: 8rem;
		width: 100%;
		display: flex;
		justify-content: center;
		letter-spacing: 6px;
	}

`;