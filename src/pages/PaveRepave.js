import { Box, Grid, MenuItem, rgbToHex, Typography } from "@material-ui/core";
import React from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import tableIcons, { options } from "../component/Universal/table_attributes";
import MROButton from "../component/FormComponents/Button";
import MROSelect from "../component/FormComponents/Select";

const useStyles = makeStyles((theme) => ({
  action: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
    },
  },
}));

export const PaveRepavePage = () => {
  const tableOptions = {
    ...options,
    search: false,
    sorting: true,
    filtering: true,
    selection: true,
  };

  const columns = [
    {
      title: "Forest",
      field: "forest",
      lookup: constructObject(data.map((d) => d.forest)),
    },
    {
      title: "Domain",
      field: "domain",
      lookup: constructObject(data.map((d) => d.domain)),
    },
    {
      title: "DataCenter",
      field: "d_center",
      lookup: constructObject(data.map((d) => d.d_center)),
    },
    {
      title: "DCName",
      field: "dc_name",
      lookup: constructObject(data.map((d) => d.dc_name)),
      render: (rowData) => rowData.dc_name,
    },
    {
      title: "Last(Re)Paved",
      field: "last_paved",
      render: (rowData) => moment(rowData.last_paved).format("DD-MM-YYYY"),
    },
    {
      title: "Status",
      field: "status",
    },
  ];

  return (
    <React.Fragment>
      <Box minHeight="100vh" mt={2} p={2}>
        <Filter />
        <MaterialTable
          title=""
          icons={tableIcons}
          options={tableOptions}
          columns={columns}
          data={data}
        />
      </Box>
    </React.Fragment>
  );
};

export const Filter = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box my={2} width="100%">
        <Grid container alignItems="flex-start">
          <Grid item container xs={12} md={1}>
            <Box pt={0.5}>
              <Typography variant="subtitle2">Filter :</Typography>
            </Box>
          </Grid>
          <Grid item container xs={12} md={8} spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
              <MROSelect name={"forest"} label={"Forest"} multiple>
                {data &&
                  data.map((item) => (
                    <MenuItem key={item.forest} value={item.forest}>
                      {item.forest}
                    </MenuItem>
                  ))}
              </MROSelect>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MROSelect name={"domain"} label={"Domain"} multiple>
                {data &&
                  data.map((item) => (
                    <MenuItem key={item.domain} value={item.domain}>
                      {item.domain}
                    </MenuItem>
                  ))}
              </MROSelect>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MROSelect name={"dc"} label={"DataCenter"} multiple>
                {data &&
                  data.map((item) => (
                    <MenuItem key={item.d_center} value={item.d_center}>
                      {item.d_center}
                    </MenuItem>
                  ))}
              </MROSelect>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MROSelect name={"dc_name"} label={"DC Name"} multiple>
                {data &&
                  data.map((item) => (
                    <MenuItem key={item.dc_name} value={item.dc_name}>
                      {item.dc_name}
                    </MenuItem>
                  ))}
              </MROSelect>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={3} lg={3} justify="flex-end">
            <Grid item container justify="flex-end" className={classes.action}>
              <MROButton variant="contained" color="primary">
                Trigger Repave
              </MROButton>
              <Spacer height={10} />
              <MROButton variant="contained" color="secondary">
                Demote
              </MROButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export const Spacer = ({ height }) => {
  return (
    <React.Fragment>
      <div style={{ height: height || "10px", width: "100%" }}></div>
    </React.Fragment>
  );
};

export const constructObject = (arr) => {
  let obj = {};
  arr.forEach((item, index) => {
    obj[arr[index]] = arr[index];
  });
  return obj;
};

export const data = Array.from(Array(10)).map((record, i) => ({
  forest: `Forest-${i + 1}`,
  domain: `Domain-${i + 1}`,
  d_center: `Center-${(i + 1) * 10}`,
  dc_name: `dcname${(i + 1) * 200}`,
  owner: "E123456",
  progress: `${i + 1}/${i + 1 + 10}`,
  request: `#${i + 1 + 50}`,
  last_paved: Date.now(),
  status: "PaveCompleted",
  reported_time: moment(Date.now()).format("DD-MM-YYYY HH:mm:ss A"),
  failure_reason: "Reason if any...",
  dc_diag_check: `Check Name-${i + 1}`,
  issuer: `Issuer name-${i + 1}`,
  cert_name: `Cert Name-${i + 1}`,
  restarted_by: "E123456",
  restarted_at: moment(Date.now()).format("DD-MM-YYYY HH:mm:ss A"),
}));
