import { Close } from "@mui/icons-material";
import { AppBar, Toolbar, styled, TextField } from "@mui/material";

const StyledToolbar = styled(Toolbar)`
  background: #121212;
  min-height: 48px !important;
  justify-content: space-between;
  position: sticky !important;
  display: flex;
  justify-content: space-between;
  padding-right: 0px !important;

  .closediv {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    margin-right: 5px;
  }
  .closediv:hover {
    background: #666699;
  }

  .CloseIcon {
    cursor: pointer;
  }
`;

const StyledTextField = styled(TextField)`
  color: white !important;
`;

const MobileSearchBar = (props: any) => {
  return (
    <div>
      <AppBar>
        <StyledToolbar>
          <StyledTextField
            sx={{}}
            InputProps={{
              style: {
                color: "#ffffff",
              },
            }}
            style={{
              width: "100%",
            }}
            placeholder="Search IMDb"
            id="standard-basic"
            variant="standard"
          />
          <div className="closediv">
            <Close
              onClick={() => props.setSearchMenu(false)}
              className="CloseIcon"
            />
          </div>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default MobileSearchBar;
