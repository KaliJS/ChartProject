import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import ApexChart from "../components/dashboard/ApexChart";
import { List } from "../components/dashboard/latest-orders";
import { DashboardLayout } from "../components/dashboard-layout";

const Page = () => {
  if (typeof window !== 'undefined') {
    return (
      <>
        <Head>
          <title>Dashboard</title>
        </Head>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item xl={9} lg={9} sm={8} xs={12}>
                <ApexChart />
              </Grid>

              <Grid item xl={3} lg={3} sm={4} xs={12}>
                <List />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  } else {
    return <div>SSR</div>;
  }
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
