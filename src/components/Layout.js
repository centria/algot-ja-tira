import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Themed } from 'theme-ui'
import { globalStyles } from '../styles'
import mediaqueries from '../styles/media'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Header from './Header'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Layout = ({ children, tableOfContents, location }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Themed.root>
      <Global styles={globalStyles} />
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <SiteWrapper>
        <LeftSidebar navOpen={navOpen} />
        <SiteContentWrapper>
          <SiteContent navOpen={navOpen}>{children}</SiteContent>
        </SiteContentWrapper>
        {tableOfContents.items && (
          <RightSidebar tableOfContents={tableOfContents} location={location} />
        )}
        <Footer>
          <p>
            © 2020 - {new Date().getFullYear()},
            <a href='https://net.centria.fi/'> Centria-ammattikorkeakoulu</a>
          </p>
          <p>
            Lue lisää{' '} <Link to='/lisenssi'>Lisenssistä</Link>
          </p>
        </Footer>
      </SiteWrapper>
    </Themed.root>
  )
}

const SiteWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: ${p => p.theme.colors.background};
  transition: background 0.25s var(--ease-in-out-quad);
`

const SiteContentWrapper = styled.div`
  flex-grow: 1;
  min-width: 20rem;
  padding-bottom: 5rem; /* Footer height */
`

const SiteContent = styled.main`
  margin: auto;
  padding: 2rem 1rem 2.5rem;
  transition: 0.25s var(--ease-in-out-quad);
  opacity: ${p => (p.navOpen ? 0.3 : 1)};
  transform: ${p => (p.navOpen ? 'translateX(19rem)' : null)};
  ${mediaqueries.desktop_up`
    transform: translateX(0);
    opacity: 1;
    padding: 7rem 3rem 3rem;
    max-width: 50rem;
  `};
`

const Footer = styled.footer`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6rem;
  padding-top: 10px;
  font-size: 1rem;

  background: ${p => p.theme.colors.footer};
  color: ${p => p.theme.colors.text};
  a {
    text-decoration: none;
    color: ${p => p.theme.colors.background};
  }
`
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  tableOfContents: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
