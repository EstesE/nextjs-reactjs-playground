"use client";

import Container from "@mui/material/Container";

const MainContainer = ( { children } ) => {
    return (
        <Container maxWidth="xl">
            {children}
        </Container>
    );
};

export default MainContainer;