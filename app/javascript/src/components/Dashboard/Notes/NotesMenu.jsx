import React, { useState } from "react";

import { Settings, Plus, Search } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui";
import { MenuBar } from "neetoui/layouts";

const NotesMenu = ({ showNotesMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <MenuBar showMenu={showNotesMenu} title="Notes">
        <MenuBar.Block label="All" count={200} active />
        <MenuBar.Block label="Users" count={80} />
        <MenuBar.Block label="Leads" count={60} />
        <MenuBar.Block label="Visitors" count={60} />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(prevState => !prevState),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
      </MenuBar>
    </div>
  );
};

export default NotesMenu;
