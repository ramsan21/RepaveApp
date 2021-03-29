import { Box, Typography } from '@material-ui/core';
import React from 'react';
import GeneralDetails from '../component/GeneralDetail';
import RepaveTimeline from '../component/RepaveTimeline';
import Logs from '../component/Logs';

export const DepartmentSetupPage = () => {
    const data = {
        dc_name: 'dcname2000',
        domain_name: 'Domain-1',
        forest_name: 'NAME XYZ.COM',
        ad_site: 'XX-YY-Z01',
        triggered_at: Date.now(),
        triggered_by: 'E123456'
    }
    return (
        <React.Fragment>
            <Box minHeight="100vh" pl={1}>
                <Box mb={2}>
                    <Typography variant="subtitle2" gutterBottom>DC Details:</Typography>
                    <GeneralDetails data={data} />
                </Box>
                <Box mb={2}>
                    <Typography variant="subtitle2" gutterBottom>DC Repave Timeline:</Typography>
                    <RepaveTimeline data={data} />
                </Box>
                <Box mb={2}>
                    <Typography variant="subtitle2" gutterBottom>Logs:</Typography>
                    <Logs data={data} />
                </Box>
            </Box>
        </React.Fragment>
    );
}
