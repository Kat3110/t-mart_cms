import {useEffect} from 'react';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Divider,
    Drawer,
    Typography,
    useMediaQuery,
} from '@mui/material';
import {UserAdd as UserAddIcon} from '../icons/user-add';
import {NavItem} from './nav-item';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GavelIcon from '@mui/icons-material/Gavel';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import Groups2Icon from '@mui/icons-material/Groups2';
import WebIcon from '@mui/icons-material/Web';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import DescriptionIcon from '@mui/icons-material/Description';
import InsightsIcon from '@mui/icons-material/Insights';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import PercentIcon from '@mui/icons-material/Percent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchemaIcon from '@mui/icons-material/Schema';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const items = [

    {
        href: '/member',
        icon: <GroupsIcon />,
        title: '회원관리',
        children: [
            {
                href: '/member/memberSearch',
                icon: <PersonSearchIcon />,
                title: '회원 검색',
            },
            {
                href: '/member/memberList',
                icon: <Groups2Icon />,
                title: '회원 리스트',
            },
        ],
    },
    {
        href: '/notice',
        icon: (<NotificationsIcon />),
        title: '공지사항관리',
        children: [
            {
                href: '/notice/noticeManagement',
                icon: <NotificationsIcon />,
                title: '공지사항',
            },
            {
                href: '/notice/noticeAdvertising',
                icon: <CelebrationIcon />,
                title: '이벤트/광고',
            },
            {
                href: '/notice/noticeFAQ',
                icon: <LiveHelpIcon />,
                title: 'FAQ',
            },
        ],
    },
    {
        href: '/admin',
        icon: (<HowToRegIcon />),
        title: '관리자 관리',
        children: [
            {
                href: '/admin/adminRegistration',
                icon: <UserAddIcon />,
                title: '관리자 등록',
            },
            {
                href: '/admin/adminRights',
                icon: <DescriptionIcon />,
                title: '권한 관리',
            },
        ],

    },
    {
        href: '/content',
        icon: (<WebIcon />),
        title: '콘텐츠 관리',
        children: [
            {
                href: '/content/statisticalAnalysis',
                icon: <InsightsIcon />,
                title: '통계 분석',
            },
            {
                href: '/content/bookingList',
                icon: <FeaturedPlayListIcon />,
                title: '예약 리스트',
            },
            {
                href: '/content/priceManagement',
                icon: <PriceChangeIcon />,
                title: '최소 가격 관리',
            },
            {
                href: '/content/commissionPrice',
                icon: <PercentIcon />,
                title: '커미션 가격 관리',
            },
            {
                href: '/content/paymentManagement',
                icon: <AccountBalanceIcon />,
                title: '대금 관리',
            },
            {
                href: '/content/csManagement',
                icon: <SchemaIcon />,
                title: 'CS 관리',
            },
            {
                href: '/content/tradingLedger',
                icon: <AutoStoriesIcon />,
                title: '거래 원장',
            },
        ],
    },
];

export const DashboardSidebar = props => {
    const {open, onClose} = props;
    const router = useRouter();
    const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false,
    });

    useEffect(
        () => {
            if (!router.isReady) {
                return;
            }

            if (open) {
                onClose?.();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.asPath],
    );

    const content = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <div>
                    <Box sx={{ backgroundColor: 'transparent', width: '100%'}}>
                        <NextLink href="/" passHref>
                            <a style={{ display: 'flex', justifyContent: 'center',flexDirection: 'column',
                                alignItems: 'center', gap: '10px', margin: '20px 0 0', color: 'white', textDecoration: 'none'}}>
                                <img src="/static/images/logo.jpg"
                                     width={'100px'}
                                     height={'100px'}
                                     style={{
                                         borderRadius: '50%', margin: '0'}} />
                                TIMART 관리자 페이지
                            </a>
                        </NextLink>
                    </Box>
                </div>
                <Divider
                    sx={{
                        borderColor: '#2D3748',
                        my: 3,
                    }}
                />
                <Box sx={{flexGrow: 1}}>
                    {items.map(item => (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                            children={item.children}
                        />
                    ))}
                </Box>
                <Divider sx={{borderColor: '#2D3748'}}/>
            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.900',
                        color: '#FFFFFF',
                        width: 280,
                    },
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.900',
                    color: '#FFFFFF',
                    width: 280,
                },
            }}
            sx={{zIndex: theme => theme.zIndex.appBar + 100}}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};

DashboardSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
};

