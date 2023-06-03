import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const PageButton = styled(Button)(({ theme }) => ({
  "&:hover": { backgroundColor: "purple" },
}));
