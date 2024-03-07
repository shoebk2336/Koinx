import { Autocomplete, Group, Burger, rem, Image, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import classes from './navbar.module.css';
import koinx from '../../assets/Images/koinx.png'

const links = [
{ link: '/crypto', label: 'Crypto Taxes' },
{ link: '/pricing', label: 'Free Tools' },
{ link: '/learn', label: 'Resource Center' },
];

export function HeaderSearch() {
const [opened, { toggle }] = useDisclosure(false);

const items = links.map((link) => (
    <a
    key={link.label}
    href={link.link}
    className={classes.link}
    onClick={(event) => event.preventDefault()}
    >
    {link.label}
    </a>
));

return (
    <header className={classes.header}>
    <div className={classes.inner}>
        <Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        <Image src={koinx} alt="KOINX Logo" w={100}/>
        </Group>

        <Group>
        <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
            <Button
            style={{borderRadius:'10px'}}
            >Get Started</Button>
        </Group>
    
        </Group>
    </div>
    </header>
);
}