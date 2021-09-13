import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function PlayListCardItem({ playlistName, song, url }) {
  return (
    <PlayListCardItemWrapper>
      <Link to={url}>
        <p>{playlistName}</p>
        <p>{song} songs</p>
      </Link>
    </PlayListCardItemWrapper>
  );
}

const PlayListCardItemWrapper = styled.li`
  height: 3rem;
  background-color: #212121;
  border: 3px solid black;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: #c4c4c4;
    cursor: pointer;
    font-size: 14px;
  }
`;

export default PlayListCardItem;