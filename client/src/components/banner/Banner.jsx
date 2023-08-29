
import { styled, Box, Typography } from '@mui/material';
import banner from './banner.png'

const Image = styled(Box)`
    width: 100%;
    background: url(https://raw.githubusercontent.com/Shiva6317/Blog-Website/6995595df8be46f28779d3b962dd07c229f26436/canvas3.png) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #fff;
    line-height: 1;
`;

const SubHeading = styled(Typography)`
    font-size: 50px;
    background: ;
    color:#f03eba;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>꧁༒☬𝓑𝓛𝓞𝓖☬༒꧂</Heading>
            <SubHeading>𝕮𝖔𝖆𝖉 𝕰𝖗𝖗𝖔𝖗</SubHeading>
        </Image>
    )
}

export default Banner;