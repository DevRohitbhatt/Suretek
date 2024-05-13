import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, styled, Collapse, Popover } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Logo = styled('img')({
    width: '225px', // Adjust width as needed
    height: 'auto', // Maintain aspect ratio
    padding: '20px', // Add padding as needed
});

const StyledLink = styled(Link)({
    color: '#000000',
    textDecoration: 'none'
})

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openCollapseIndex, setOpenCollapseIndex] = useState(null);
    const [accountMenu, setAccountMenu] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
        setOpenCollapseIndex(null);
    };

    const handleMenuOpen = (event, index) => {
        setAnchorEl(event.currentTarget);
        setOpenCollapseIndex(index);
    };

    const handleAccountMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setAccountMenu(true);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenCollapseIndex(null);
        setAccountMenu(false);
    };

    const isMobileOrTablet = useMediaQuery('(max-width: 960px)');

    const handleDropdownItemClick = (index) => {
        if (isMobileOrTablet) {
            setOpenCollapseIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle collapse state on mobile and tablet
        }
    };
    // Define navigation items
    const navigationItems = [
        { text: 'Why eaconomy™', to: '/why-eaconomy' },
        {
            text: 'Services', dropdownItems: [
                { text: 'Eminus', to: '/eminus' },
                { text: 'Manara', to: '/manara' },
                // Add more dropdown items if needed
            ]
        },
        { text: 'Join Now', to: '/join-now' },
        { text: 'Eaconomy™ Portal', to: '/eaconomy-portal' },
        // Add more navigation items if needed
    ];

    const acountMenus = [{text: 'My Account', to:'/my-account/profile'}, {text: 'My Orders', to:'/my-account/orders'}, {text: 'Logout', to:'/logout'}];

    return (
        <AppBar position="static" color="transparent" sx={{ display: 'flex', boxShadow: 'none' }}>
            <Toolbar className="header-toolbar">
                <div className="header-div">

                    {/* Logo */}
                    <Link to={'/'}>
                    <Logo src="https://cdn.raveretailer.com/1C4E04E133/2023/07/images/GSR_64ac0ee918ea32843031689001209.png" className='logo' alt="Logo" />
                    </Link>

                    {/* Desktop Navigation Menu */}
                    {!isMobileOrTablet && (
                        <List className="header-list">
                            {navigationItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <ListItem
                                        sx={{ width: 'max-content' }}
                                        disablePadding={true}
                                        onClick={(event) => handleMenuOpen(event, index)}
                                    >
                                        <StyledLink to={item?.to}>{item.text}</StyledLink>
                                        {item.dropdownItems && <ArrowDropDownIcon />}
                                    </ListItem>
                                    {item.dropdownItems && (
                                        <Popover
                                            open={openCollapseIndex === index}
                                            anchorEl={anchorEl}
                                            onClose={handleMenuClose}
                                            sx={{
                                                top: '40px'
                                            }}
                                        >
                                            <List>
                                                {item.dropdownItems.map((dropdownItem, idx) => (
                                                    <ListItem
                                                        component={Link}
                                                        to={dropdownItem.to}
                                                        key={idx}
                                                    >
                                                        <ListItemText primary={dropdownItem.text} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Popover>
                                    )}
                                </React.Fragment>
                            ))}
                        </List>
                    )}
                </div>

                <div style={{ display: 'flex' }} className='header-right'>

                    {/* Search Box */}
                    <div className="search-box-item" style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        {/* Add search box input here */}
                    </div>

                    {/* My Account Dropdown */}
                    <div style={{ display: 'flex', alignItems: 'center' }} >
                        <IconButton onClick={(e)=>{handleAccountMenuOpen(e)}}>
                            <AccountCircleIcon />
                            
                        </IconButton>
                        {/* Add dropdown for My Account here */}
                        <Popover
                        open={accountMenu}
                        anchorEl={anchorEl}
                        onClose={handleMenuClose}
                        sx={{
                            top: '40px'
                        }}
                    >
                        <List className='account-list'>
                            {acountMenus.map((item, index) => (
                                <ListItem component={Link}  to={item.to}  key={index}> <ListItemText primary={item.text} /> </ListItem>
                            ))}                          
                        </List>
                    </Popover>
                    </div>
                 

                    {/* Shopping Cart Icon */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to={'/shopping-cart'}>
                        <IconButton className='shopping-cart-icon'>
                        
                            <ShoppingCartIcon />
                            
                        </IconButton>
                        </Link>
                        {/* Add shopping cart content here */}
                    </div>

                    {/* Menu Icon for Mobile and Tablet */}
                    {isMobileOrTablet && (
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                </div>

            </Toolbar>

            {/* Drawer for Mobile and Tablet */}
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleDrawerClose}
            >
                <div className='mb-menu'>
                    <IconButton onClick={handleDrawerClose} style={{ alignSelf: 'flex-end' }}>
                        <CloseIcon />
                    </IconButton>
                    <List className='menu-list'>
                        {navigationItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem component={Link} to={item.to} onClick={() => handleDropdownItemClick(index)}>
                                    <ListItemText primary={item.text} />
                                    {item.dropdownItems && (openCollapseIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                                </ListItem>
                                {item.dropdownItems && (
                                    <Collapse in={openCollapseIndex === index} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {item.dropdownItems.map((dropdownItem, idx) => (
                                                <ListItem component={Link} to={dropdownItem.to} key={idx} sx={{ pl: 4 }}>
                                                    <ListItemText primary={dropdownItem.text} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                )}
                            </React.Fragment>
                        ))}
                    </List>
                </div>
            </Drawer>
        </AppBar>
    );
};

export default Header;
