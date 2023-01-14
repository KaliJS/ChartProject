import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import LatestOrders from "../components/dashboard/latest-orders";
import { DashboardLayout } from "../components/dashboard-layout";
import dynamic from 'next/dynamic'

const ApexChart = dynamic(
  () => import('../components/dashboard/ApexChart'),
  { ssr: false }
)

const Page = () => {
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
              <Grid item xl={8} lg={8} sm={8} xs={12}>
                <ApexChart />
              </Grid>

              <Grid item xl={4} lg={4} sm={4} xs={12}>
                <LatestOrders />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
