import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';




function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab  label="General Details" href="/drafts" style={{textTransform : "capitalize", color:"rgba(57, 205, 204, 1)"}} className="profile-list"/>
        <LinkTab label="Documents" href="/trash" style={{textTransform : "capitalize"}} className="profile-list"/>
        <LinkTab label="Bank Details" href="/spam" style={{textTransform : "capitalize"}} className="profile-list"/>
        <LinkTab label="Loans" href="/spam" style={{textTransform : "capitalize"}} className="profile-list"/>
        <LinkTab label="Savings" href="/spam" style={{textTransform : "capitalize"}} className="profile-list"/>
        <LinkTab label="App and System" href="/spam" style={{textTransform : "capitalize"}} className="profile-list"/>
      </Tabs>
    </Box>
  );
}