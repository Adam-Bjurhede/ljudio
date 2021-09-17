import React from 'react';
import PlayListCardItem from './PlayListCardItem';
import styled from 'styled-components';
import useGetFollowedPlaylists from '../../../hooks/useGetFollowedPlaylists';

function FollowedPlaylists() {
  // PLACEHOLDER HERE WILL WE INMPORT DATA WITH React query

  const { data } = useGetFollowedPlaylists();

  return (
    <FollowingPlayListWrapper>
      {data &&
        data.followedPlaylists &&
        data.followedPlaylists.length > 0 &&
        data.followedPlaylists.map((playlist) => {
          return <PlayListCardItem key={playlist.id} {...playlist} followItem={true} />;
        })}
        {data &&
          data.followedPlaylists &&
          data.followedPlaylists.length === 0 &&
          <p>No followed lists yet =/</p>
        }
    </FollowingPlayListWrapper>
  );
}

const FollowingPlayListWrapper = styled.ul`
  ::-webkit-scrollbar {
    display: none;
  }
  color: #c4c4c4;
  height: 5rem;
  overflow: scroll;
  overflow-x: hidden;
  width: auto;
  min-width: 10rem;
`;

export default FollowedPlaylists;
