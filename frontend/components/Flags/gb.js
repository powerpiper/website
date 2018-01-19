import SVGIcon from 'grommet/components/SVGIcon'

import Wrapper from './wrapper'

const GB = (props) => {
  return (
    <Wrapper>
      <SVGIcon viewBox='0 0 60 30' width="100" height="60" version='1.1' type='logo' a11yTitle={props.label}>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
        </clipPath>
        <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"/>
      </SVGIcon>
        &nbsp;{ props.label }
    </Wrapper>
  )
}

export default GB
