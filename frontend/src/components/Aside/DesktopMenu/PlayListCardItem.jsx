import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

function PlayListCardItem({ title, playlistId, id }) {
  return (
    <PlayListCardItemWrapper>
      <Link to={`/playlist/${playlistId ? playlistId : id}`}>
        <p>{title}</p>
      </Link>
    </PlayListCardItemWrapper>
  );
}

const PlayListCardItemWrapper = styled.li`
  &:hover {
    opacity: 60%;
    transition: 0.2s ease-in-out;
  }
  height: 3rem;
  background-color: #212121;
  border: 3px solid black;
  display: flex;
  align-items: center;
  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
  }
`;

export default PlayListCardItem;
