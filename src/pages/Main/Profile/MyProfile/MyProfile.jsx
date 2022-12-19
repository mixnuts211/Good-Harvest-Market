import React from 'react';
import styled from 'styled-components';
import Follow from '../../../../components/Follow/Follow';
import Header from '../../../../components/Header/Header';
import Profile from '../../../../components/Profile/Profile';
import { ConWrap } from '../../../../styles/GlobalStyles';

const ConWrapStyle = styled.main`
  ${ConWrap}
`;

export default function MyProfile() {
  return (
    <>
      <Header />
      <ConWrapStyle>
        <Profile
          username="풍이네 주말농장"
          usertext="@sunday_Farm"
          align="center"
          margin="16px 0 17px 0"
          namemarginbottom="6px"
        />
      </ConWrapStyle>
    </>
  );
}
