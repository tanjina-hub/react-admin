import React from 'react'
//import { DataGrid } from '@material-ui/data-grid'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  )
}

export default UserList