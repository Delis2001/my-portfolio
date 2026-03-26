import styled from "styled-components";

const LogoWrapper = styled.svg.attrs({viewBox: '0 0 87.866 101.459', xmlns: 'http://www.w3.org/2000/svg'})`
    width: 55px;
    height: 55px;
    object-fit: contain;
`;

export const Logo = () => {
    return (
        <LogoWrapper>
            <g id="logo" transform="translate(3 3.464)">
                <g id="hex">
                <path id="Path_83" data-name="Path 83" d="M40.933,0,81.866,23.633V70.9L40.933,94.53,0,70.9V23.633Z" fill="none" stroke="#7064d7" strokeWidth="6"/>
                </g>
                <text id="NFC" x="43.933" y="62" fill="#7462de" textAnchor="middle" style={{fontSize: '26px', fontWeight: 700, letterSpacing: 3}}><tspan>NFC</tspan></text>
            </g>
        </LogoWrapper>
    )
}