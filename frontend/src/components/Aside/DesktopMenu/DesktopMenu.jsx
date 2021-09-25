import React from 'react';
import styled from 'styled-components';

//Components
import MenuItems from './MenuItems';
import PlaylistSection from './PlaylistSection';

function DesktopMenu() {
  return (
    <AsideMenuWrapper>
      <MenuItems />
      <PlaylistSection />
    </AsideMenuWrapper>
  );
}

const AsideMenuWrapper = styled.div`
  margin-top: 1rem;

  height: 100%;
  width: 95%;
  .logout-btn-container {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  p {
    color: #999;
  }

  .myPlaylist-h1 {
    margin-left: 1rem;
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    color: #c4c4c4;
    cursor: default;
  }
`;

export default DesktopMenu;
