import {
  createStyles,
  Container,
  Avatar,
  Group,
  Text,
  Tabs,
  rem,
  Modal,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderResponsiveProps } from '../types/Types'
import BaseButton from './BaseButton';
import Cart from './Cart';
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from 'react-icons/hi'

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
    marginBottom: rem(120),
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    // [theme.fn.smallerThan('xs')]: {
    //   display: 'none',
    // },
  },

  tabs: {
    // [theme.fn.smallerThan('sm')]: {
    //   display: 'none',
    // },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: rem(38),
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },
}));

function HeaderResponsive({ user, tabs }: HeaderResponsiveProps) {

  const navigate = useNavigate();
  const { classes, theme, cx } = useStyles();

  const [opened, { open, close }] = useDisclosure(false);

  const openCart = () => {
    navigate("/cart")
    console.log("Cart opened")
  }

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>

        <Group position="right">

          <Group spacing={15}>
                <Avatar src={user.image} alt={user.name} radius="xl" size={30} />
                <Text weight={500} size="md" sx={{ lineHeight: 1 }} mr={3}>
                    {user.name}
                </Text>
          </Group>

          <Modal opened={opened} onClose={close} title="My Cart" centered>
              <Cart />
          </Modal>

          <Group position="center">
              <BaseButton
                title='My Cart'
                icon={<HiOutlineShoppingCart/>}
                size='md'
                colour='red'
                onClickCallback={open} />
          </Group>

        </Group>

      </Container>
      <Container>
        <h2>Marketplace</h2>

        <Tabs
          defaultValue="Home"
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}

export default HeaderResponsive;