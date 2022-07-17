import {Card, CardContent, Divider, Grid, Stack} from "@mui/material";

function Index(props) {
    const {product} = props;
    const {name, avatar, price, description} = product;

    return (
        <Stack spacing={1}>
            <Grid container>
                <Grid item xs={4}>
                    <Card variant="outlined" className="Product-Card-Style">
                        <CardContent>
                            <img className="Product-Image-Style"
                                 src={avatar}
                                 srcSet={avatar}
                                 alt={name}
                                 loading="lazy"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} className="Product-Detail-Name-Style">
                    <p>{name}</p>
                    <p>{price}</p>
                </Grid>
            </Grid>
            <Divider/>
            <p> {description}</p>
        </Stack>);
}

export default Index;
