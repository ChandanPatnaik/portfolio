import { Dialog, DialogProps } from "@mui/material";
import { FC } from "react";

interface CustomDialogProps extends DialogProps {}

const CustomDialog: FC<CustomDialogProps> = ({
  onClose,
  children,
  open,
  ...props
}) => {
  return (
    <Dialog {...props} open={open} onClose={onClose}>
      {children}
    </Dialog>
  );
};

export default CustomDialog;
