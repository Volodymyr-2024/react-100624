import { styled } from "@mui/system";

const CustomButton = styled("button")(({ theme }) => {
  return {
    background: `linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)`,
    color: "white",
    border: 0,
    padding: 16,
    borderRadius: 4,
  };
});

export default CustomButton;
