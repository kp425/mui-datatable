import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import MUIDataTable from 'mui-datatables';

const theme = createMuiTheme({
  overrides: {
    MuiTable: {
      root: {
        border: [[1, 'solid', '#d3d3d3']],
      },
    },
    MuiTableCell: {
      root: {
        borderColor: '#d3d3d3',
      },
      head: {
        background: 'lightgrey',
        '&:not(:last-child)': {
          borderRight: [[1, 'solid', '#c0c0c0']],
        },
      },
    },
    MuiTableSortLabel: {
      root: {
        alignItems: 'flex-start',
      },
    },
    MuiTableFooter: {
      root: {
        background: 'lightgrey',
      },
    },

    // MUIDataTable
    MUIDataTableHeadCell: {
      sortLabelRoot: {
        // height: undefined,
      },
    },
  },
});

const columns = [
  { name: 'type', label: 'Type' },
  { name: 'email', label: 'Email' },
  {
    name: 'environments',
    label: 'Envrionments',
    options: {
      customBodyRender: value => value.join(', '),
      filterType: 'multiselect',
    },
  },
];

const data = [
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION', 'DEV_SANDBOX'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION', 'DEV_SANDBOX'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION', 'DEV_SANDBOX'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION', 'DEV_SANDBOX'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION', 'DEV_SANDBOX'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION', 'DEV_SANDBOX'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION', 'DEV_SANDBOX'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION', 'DEV_SANDBOX'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION', 'DEV_SANDBOX'],
  },
  {
    type: 'APPLICATION_SUPPORT',
    email: 'test@td.com',
    environments: ['DEV_INTEGRATION', 'DEV_SANDBOX'],
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MUIDataTable
        columns={columns}
        data={data}
        options={{
          responsive: '',
          fixedHeader: false,
          filterType: 'textField',
          selectableRows: 'none',
          elevation: 0,
          print: false,
        }}
      />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
