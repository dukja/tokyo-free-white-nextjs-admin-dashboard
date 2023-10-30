import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button,
  TextField,
  Container,
  Stack,
  Tabs,
  Tab,
  styled
} from '@mui/material';
import {useState,SyntheticEvent} from 'react';
import Footer from '@/components/Footer';
import Text from '@/components/Text';
import RecentOrders from '@/content/Management/Transactions/RecentOrders';
import { Padding } from '@mui/icons-material';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}
function SettingTr() {
  return (
    <Grid item xs={12} >
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={2}>
          <Box pt={2} pb={2}>
            텍스트
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField id="outlined-basic"  variant="outlined" fullWidth
            InputLabelProps={{
              shrink: true
            }}                    
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Box pt={2} pb={2}>
            텍스트
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField id="outlined-basic"  variant="outlined" fullWidth
            InputLabelProps={{
              shrink: true
            }}                    
          />
        </Grid>
      </Grid>
    </Grid>   
  )
}
function Settings(){
  return(
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Grid container rowSpacing={2}>
            <SettingTr/>  
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <SettingTr/>   
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <SettingTr/>   
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <SettingTr/>   
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <SettingTr/>   
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

function SettingTable() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const CardRe= styled(Card)(
    ({ theme }) => `
       padding:${theme.spacing(0)};
  `
  );
  return (
    <>
      <Container maxWidth="xxl">
        <Grid container spacing={5}>
          <Settings/>
          <Grid item xs={12}>
            <Card>
              <CardRe>
                
                <Box pt={2} pl={3} pr={3}>
                  <Tabs
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="primary"
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"

                  >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                  </Tabs>                  
                </Box>
                <TabPanel value={value} index={0}>
                  <RecentOrders />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
              </CardRe>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

SettingTable.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default SettingTable;
