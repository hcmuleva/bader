import React, { useState } from "react";
import MaterialTable, { MTableBodyRow } from "material-table";
import { 
  RemoveCircleOutlineOutlined as RemoveCircleIcon,
  AccountCircleOutlined as AccountCircleIcon
} from '@material-ui/icons';

const rando = max => Math.floor(Math.random() * max);
const words = ["Paper", "Rock", "Scissors"];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    id: rando(300),
    name: words[i % words.length]
  });
}

const columns = [
  { title: "Id", field: "id" },
  { title: "Name", field: "name" }
];

const actions = [
  {
    name: 'remove', // Added custom name property so we know which action to check for
    icon: () => <RemoveCircleIcon />,
    tooltip: <h1>I am a tooltip</h1>,
    onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
    disabled: false, // Set disabled to false by default for all actions
    position: "row"
  },
  {
    name: 'account',
    icon: () => <AccountCircleIcon />,
    tooltip: <h1>I am a tooltip</h1>,
    onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
    disabled: false,
    position: "row"
  }
];

export function DemoMaterialUiTable(props) {
  

  return (
    <MaterialTable
    actions={actions}
    data={data}
    
    columns={columns}
    // components={{
    //   Row: props => {
    //     const propsCopy = { ...props };
    //     propsCopy.actions.find(a => a.name === 'remove').disabled = propsCopy.data.id < 100;
    //     propsCopy.actions.find(a => a.name === 'account').disabled = propsCopy.data.name !== 'Paper';
    //     return <MTableBodyRow {...propsCopy} />
    //   }
    // }}
    options={{
      selection: true,
    }}
  />
  )
}
