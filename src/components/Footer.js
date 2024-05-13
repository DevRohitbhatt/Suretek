import React from 'react';
import { Grid, Typography, Link, Button, IconButton, List, ListItem } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const FooterContainer = styled('footer')({
    backgroundColor: '#000000', // Adjust background color as needed
    paddingTop: '60px',
});

const FooterImage = styled('img')({
    width: '-webkit-fill-available',
});

const FooterHeading = styled(Typography)({
    color: "#FFFFFF"
});

const Text = styled(Typography)({
    color: "#FFFFFF"
})

const ListItemm = styled(ListItem)({
    fontSize: '18px',
    lineHeight: '30px',
    fontWeight: '400',
    color: '#FFFFFF',
    paddingLeft: '0',
    paddingTop: '0',
    '& a': {
        color: '#FFFFFF'
    }
})

const FooterContentRight = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px',
});

const FooterSocialLinks = styled('div')({
    '& ul': {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        '& li': {
            display: 'inline-block',
            marginRight: '8px',
            color: '#FFFFFF'
        },
    },
});

const Footer = () => {
    return (
        <FooterContainer>
            <Grid container spacing={{ xs: 1, sm: 2, md: 8 }}>
                {/* Footer Image */}
                <Grid item xs={12} md={6} sm={6} className='footerleft'>
                    <div className="footer-img-div">
                        <FooterImage src="https://cdn.raveretailer.com/1C4E04E133/2023/07/images/GSR_64b06ec8979434562181689287896.png" alt="" className="footer-img" />
                    </div>
                </Grid>
                {/* Footer Content */}
                <FooterContentRight className='footerRyt' item xs={12} md={5} sm={6}>
                    <Typography>
                        <img src="https://cdn.raveretailer.com/1C4E04E133/2023/07/images/GSR_64b06ec7389441085471689287895.png" alt="" />
                    </Typography>
                    <h3>Make 2024 a year<br/> of growth</h3>
                    <Text>Eaconomy™ is your access to the right leadership,<br/> technology, and strategies to help you design the<br/> future you want.</Text>
                    <div pt={4}>
                        <Button variant="contained" color="primary" href="https://eaconomy.best/enrollment" mt={1}>Join us</Button>
                    </div>
                    <Text variant="h6" className="footer-h6">Products</Text>
                    <Grid container spacing={{ xs: 2, sm: 4, md: 4 }}>
                        {/* First Column */}
                        <Grid item xs={12} md={6}>
                            <List sx={{ padding: '0' }} >
                                <ListItemm>
                                    <Link href="https://eaconomy.best/eminus">Eminus</Link>
                                </ListItemm>
                                <ListItemm>
                                    <Link href="https://eaconomy.best/mannara">Manara</Link>
                                </ListItemm>
                                <ListItemm>Address:<br />1980 Festival Plaza Drive Summerlin South, #300<br />Las Vegas, NV, 89135<br />United States of America</ListItemm>
                            </List>
                        </Grid>
                        {/* Second Column */}
                        <Grid item xs={12} md={6}>
                            <List sx={{padding:'0'}}>
                                <ListItemm>
                                    <Link href="https://eaconomy.best/why-eaconomy">About</Link>
                                </ListItemm>
                                <ListItemm>
                                    <Link href="https://eaconomy.best/eaconomy-privacy-policy">Contact</Link>
                                </ListItemm>
                            </List>
                        </Grid>
                    </Grid>
                    <Typography className='footer-links'>
                        <Link href="/user-agreement">User Agreement</Link> | <Link href="/risk-warning">Risk Warning</Link> | <Link href="/terms-and-conditions">Terms & Conditions</Link> | <Link href="/refund-policy">Refund Policy</Link> | <Link href="/eaconomy-privacy-policy">Eaconomy Privacy Policy</Link> | <Link href="/spam-policy">Spam Policy</Link> | <Link href="/dmca">DMCA</Link>
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: "center" }} className='pdt-0'>
                            <Text>&copy; 2024, Eaconomy LLC. All Rights Reserved</Text>
                        </Grid>
                        <Grid item xs={6} className='pdt-0'>
                            <FooterSocialLinks>
                                <ul>
                                    <li><IconButton sx={{ color: 'white' }}><InstagramIcon /></IconButton></li>
                                    <li><IconButton sx={{ color: 'white' }}><FacebookIcon /></IconButton></li>
                                    <li><IconButton sx={{ color: 'white' }}><TwitterIcon /></IconButton></li>
                                    <li><IconButton sx={{ color: 'white' }}><LinkedInIcon /></IconButton></li>
                                </ul>
                            </FooterSocialLinks>
                        </Grid>
                    </Grid>
                </FooterContentRight>
            </Grid>
        </FooterContainer>
    );
};

export default Footer;
