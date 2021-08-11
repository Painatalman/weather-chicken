import { ReactElement } from "react"
import styled from "styled-components"

function getThemedChicken(themeColor: string):React.FC {

  const Themed = styled.g`
  fill: ${themeColor};
`

  const Beak = styled.g`
  fill: #ae2200;
`

  const Legs = styled.g`
  fill: #aaaa0d;
`

  const ThemedChicken:React.FC = () => <svg width="156px" height="120px" viewBox="0 0 52 40" >
    <Themed>
      <rect x="8" y="2" width="2" height="2" />
      <rect x="10" y="0" width="2" height="4" />
      <rect x="12" y="0" width="2" height="4" />
      <rect x="14" y="0" width="2" height="4" />
      <rect x="16" y="0" width="2" height="2" />
    </Themed>
    <Beak>
      <rect x="4" y="6" width="2" height="2" strokeWidth="0" />
      <rect x="2" y="8" width="4" height="2" strokeWidth="0" />
      <rect x="0" y="10" width="6" height="2" strokeWidth="0" />
    </Beak>
    <g>
      <rect x="10" y="8" width="4" height="2"></rect>
      <rect x="10" y="10" width="2" height="2"></rect>
    </g>
    <g>
      <rect x="6" y="4" width="2" height="2" />
      <rect x="8" y="3" width="8" height="2" />
      <rect x="16" y="4" width="2" height="2" />
      <rect x="18" y="6" width="2" height="2" />
      <rect x="18" y="8" width="2" height="8" />
      <rect x="20" y="16" width="8" height="2" />
      <rect x="28" y="14" width="4" height="2" />
      <rect x="32" y="12" width="4" height="2" />
      <rect x="36" y="10" width="4" height="2" />
      <rect x="6" y="12" width="2" height="8" />
      <rect x="8" y="20" width="2" height="4" />
      <rect x="10" y="24" width="2" height="4" />
      <rect x="12" y="28" width="4" height="2" />
      <rect x="28" y="28" width="4" height="2" />
      <rect x="16" y="30" width="12" height="2" />
      <rect x="32" y="24" width="2" height="4" />
      <rect x="34" y="20" width="2" height="4" />
      <rect x="36" y="16" width="2" height="4" />
      <rect x="32" y="24" width="2" height="4" />
      <rect x="34" y="20" width="2" height="4" />
      <rect x="38" y="12" width="2" height="4" />
    </g>
    <Themed>
      <rect x="34" y="12" width="2" height="2" />
      <rect x="36" y="10" width="2" height="2" />
      <rect x="38" y="8" width="2" height="2" />
      <rect x="40" y="6" width="2" height="2" />
      <rect x="42" y="4" width="6" height="2" />
      <rect x="48" y="6" width="2" height="2" />
      <rect x="50" y="8" width="2" height="6" />
    </Themed>
    <Themed transform="translate(0, 4)">
      <rect x="34" y="12" width="2" height="2" />
      <rect x="36" y="10" width="2" height="2" />
      <rect x="38" y="8" width="2" height="2" />
      <rect x="40" y="6" width="2" height="2" />
      <rect x="42" y="4" width="6" height="2" />
      <rect x="48" y="6" width="2" height="2" />
      <rect x="50" y="8" width="2" height="6" />
    </Themed>
    <Themed transform="translate(0, 8)">
      <rect x="34" y="12" width="2" height="2" />
      <rect x="36" y="10" width="2" height="2" />
      <rect x="38" y="8" width="2" height="2" />
      <rect x="40" y="6" width="2" height="2" />
      <rect x="42" y="4" width="6" height="2" />
      <rect x="48" y="6" width="2" height="2" />
      <rect x="50" y="8" width="2" height="6" />
    </Themed>
    <Themed>
      <rect x="18" y="20" width="10" height="2" />
      <rect x="28" y="22" width="2" height="2" />
      <rect x="26" y="22" width="2" height="4" />
      <rect x="18" y="26" width="8" height="2" />
      <rect x="16" y="22" width="10" height="4" />
    </Themed>
    <Legs>
      <rect x="14" y="38" width="4" height="2"></rect>
      <rect x="18" y="32" width="2" height="8"></rect>
      <rect x="26" y="32" width="2" height="8"></rect>
      <rect x="26" y="32" width="2" height="8"></rect>
      <rect x="22" y="38" width="4" height="2"></rect>
    </Legs>
  </svg>

  return ThemedChicken
}

export default getThemedChicken
