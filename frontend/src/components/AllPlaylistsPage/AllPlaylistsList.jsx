import React from 'react';

import styled from 'styled-components';

import AllPlaylistsListItemCard from './AllPlaylistsListItemCard';
import useGetAllPlaylists from '../../hooks/useGetAllPlaylists'





function AllPlaylistsList() {

    const { data: allPlaylists } = useGetAllPlaylists();


	return (
		<AllPlaylistsListWrapper>
			{allPlaylists && allPlaylists.playlists && allPlaylists.playlists.map((playlist) => <AllPlaylistsListItemCard key={playlist.playlistId} {...playlist} /> )}
		</AllPlaylistsListWrapper>
	);
}

export default AllPlaylistsList;


const AllPlaylistsListWrapper = styled.div`

::-webkit-scrollbar {
		display: none;
	}
	overflow-y: scroll;
	width: 100%;
	display: grid;
	gap: 0.5rem;
	grid-template-columns: 15vw 15vw  15vw  15vw ;





`