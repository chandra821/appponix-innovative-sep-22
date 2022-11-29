import { Container, Grid } from "@mui/material"
import { Myform } from "../../components"
import { MyAtocomplete } from "../../components/mui/autocomplete/MyAtocomplete"

export const MyLogin: React.FC<{}> = () => {
    return <>
        <Container maxWidth="xl">
            <Grid>
                navbar
            </Grid>
            <Grid> autocomplete
                <MyAtocomplete />

            </Grid>
            <Grid>
                my form
                <Myform />
            </Grid>
        </Container>
    </>
}