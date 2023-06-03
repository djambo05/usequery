import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const PageButton = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: "rgb(100, 32, 123)",
  "&:hover": { backgroundColor: "white" },
}));
