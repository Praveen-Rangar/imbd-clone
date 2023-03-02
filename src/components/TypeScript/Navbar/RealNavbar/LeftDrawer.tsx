import { Drawer } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function LeftDrawer(props: any) {
  const drawer = (
    <Box
      sx={{
        width: 250,
        height: 1,
        backgroundColor: "#212121",
        color: "#ffffff",
      }}
    ></Box>
  );
  return (
    <Drawer
      className="Hamburger"
      anchor="left"
      open={props.state}
      onClose={() => props.setstate(false)}
    >
      {drawer}
    </Drawer>
  );
}
