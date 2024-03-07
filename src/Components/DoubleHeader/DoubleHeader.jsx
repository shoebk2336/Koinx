import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './DoubleHeader.module.css';

const mainLinks = [
{ link: '#', label: 'Overview' },
{ link: '#', label: 'Fundamentals' },
{ link: '#', label: 'News Insights' },
{ link: '#', label: 'Sentiments' },
{ link: '#', label: 'Team' },
{ link: '#', label: 'Technicals' },
{ link: '#', label: 'Tokenomics' },

];

export function DoubleHeader() {
const [opened, { toggle }] = useDisclosure(false);
const [active, setActive] = useState(0);

const mainItems = mainLinks.map((item, index) => (
    <Anchor
    href={item.link}
    key={item.label}
    className={classes.mainLink}
    data-active={index === active || undefined}
    onClick={(event) => {
        event.preventDefault();
        setActive(index);
    }}
    c={index===active?"blue":'black'}
    style={{textTransform:'none',
    fontSize:'15px'
}}
    >
    {item.label}
    </Anchor>
));


return (
    <header className={classes.header}>
    <Container className={classes.inner}>
        <Box className={classes.links} visibleFrom="sm">
        <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
        </Group>
        </Box>
        <Burger
        opened={opened}
        onClick={toggle}
        className={classes.burger}
        size="sm"
        hiddenFrom="sm"
        />
    </Container>
    </header>
);
}