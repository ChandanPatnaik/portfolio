/* eslint-disable @next/next/no-img-element */

/**
 * Supported and usable input types:
 *
 * - text
 * - email
 * - phone
 * - password
 * - custom-view-password
 * - slider
 * - radio
 * - checkbox
 * - radio-group
 * - checkbox-group
 * - select
 * - multi-select
 * - multiple-autocomplete
 * - autocomplete
 * - country-selector
 * - file-with-preview
 * - file-no-preview
 *
 * Please ensure to use these types appropriately when configuring the component.
 */

/****
 * IMPORTANT: Please comply to the following rules to ensure proper functionality of this component:
 *
 * 1. If you have utilized components such as checkbox, radio, checkbox-group, radio-group, slider, range-slider,
 *    multi-select, autocomplete, multiple-autocomplete, or country-selector, it is mandatory to pass the 'formik'
 *    prop to this component.
 *
 * 2. You can customize the color of certain types. Ensure that only hexadecimal color codes are used for customization.
 *
 * 3. Additionally, customize different fields using the 'InputProps' property.
 *
 * Note: Failure to comply with these guidelines may result in unexpected behavior.
 *
 * Created by Rudra
 ****/

import {
  Autocomplete,
  Box,
  Checkbox,
  Chip,
  CircularProgress,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  InputProps,
  MenuItem,
  Radio,
  Select,
  Slider,
  TextField,
  Tooltip,
} from "@mui/material";
import { FormikProps } from "formik";
import React, {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  HTMLInputTypeAttribute,
  SetStateAction,
  useState,
} from "react";
import { FaEye } from "react-icons/fa6";
import { MdNotInterested, MdVisibility, MdVisibilityOff } from "react-icons/md";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface Props {
  type?: HTMLInputTypeAttribute;
  value?: string | number | string[] | File;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  error?: boolean;
  key?: string | number;
  helperText?: string | false;
  fullWidth?: boolean;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  options?: { label?: string | number; value: string | number }[];
  id?: string | number;
  variant?: "filled" | "outlined" | "standard";
  InputProps?: InputProps;
  multiline?: boolean;
  rows?: number;
  defaultValue?: string | number | [] | object;
  label?: string;
  size?: "small" | "medium";
  formik?: FormikProps<{
    [key: string]: string;
  }>;
  labelPlacement?: "bottom" | "top" | "start" | "end" | undefined;
  checkedIcon?: React.ReactNode;
  checkboxIcon?: React.ReactNode;
  marks?: boolean | { value: number; label: number }[];
  step?: number;
  valueLabelDisplay?: "auto" | "on" | "off";
  orientation?: "horizontal" | "vertical";
  min?: number;
  max?: number;
  loading?: boolean;
  fileSize?: number;
  setAutoCompleteValue?: Dispatch<SetStateAction<string>>;
}

const CustomInput = ({
  type = "text",
  value,
  label,
  onChange,
  onBlur,
  error,
  helperText,
  fullWidth,
  placeholder,
  name,
  disabled,
  InputProps,
  id,
  variant,
  options,
  rows,
  multiline,
  defaultValue,
  size,
  formik,
  labelPlacement,
  checkedIcon,
  checkboxIcon,
  marks,
  step,
  valueLabelDisplay = "on",
  orientation = "horizontal",
  min = 0,
  max = 100,
  loading,
  fileSize = 200, //accepts 200kb in size,
  setAutoCompleteValue,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  switch (type) {
    case "text":
    case "email":
      return (
        <TextField
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={name}
          size={size}
          id={String(id)}
          type={type}
          disabled={disabled}
          variant={variant}
          InputProps={InputProps}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          helperText={helperText}
          defaultValue={defaultValue}
        />
      );
    case "number":
      return (
        <TextField
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={name}
          size={size}
          id={String(id)}
          type={"text"}
          disabled={disabled}
          variant={variant}
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (
              !/^[0-9]$/.test(e.key) &&
              e.key !== "Backspace" &&
              e.key !== "ArrowLeft" &&
              e.key !== "ArrowRight" &&
              !(e.key === "a" && (e.ctrlKey || e.metaKey)) &&
              !(e.key === "x" && (e.ctrlKey || e.metaKey))
            )
              e.preventDefault();
          }}
          onBlur={onBlur}
          inputMode="numeric"
          error={error}
          InputProps={InputProps}
          helperText={helperText}
          defaultValue={defaultValue}
        />
      );
    case "password":
      return (
        <TextField
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={name}
          size={size}
          id={String(id)}
          type={showPassword ? "text" : type}
          disabled={disabled}
          variant={variant}
          InputProps={{
            ...InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <MdVisibility className="! text-xl" />
                  ) : (
                    <MdVisibilityOff className="! text-xl" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          multiline={multiline}
          rows={rows}
          helperText={helperText}
          defaultValue={defaultValue}
        />
      );
    case "textarea":
      return (
        <TextField
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={name}
          size={size}
          id={String(id)}
          type={type}
          disabled={disabled}
          variant={variant}
          InputProps={InputProps}
          value={value}
          multiline={true}
          rows={rows || 5}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          helperText={helperText}
          defaultValue={defaultValue}
        />
      );
    case "custom-view-password":
      return (
        <div>
          <TextField
            fullWidth={fullWidth}
            placeholder={placeholder}
            name={name}
            size={size}
            id={String(id)}
            type={showPassword ? "text" : "password"}
            disabled={disabled}
            variant={variant}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            multiline={multiline}
            rows={rows}
            helperText={helperText}
            defaultValue={defaultValue}
          />

          <div>
            <FormControlLabel
              checked={showPassword}
              onClick={() => setShowPassword(!showPassword)}
              control={<Checkbox />}
              label="show password"
            />
          </div>
        </div>
      );
    case "file-with-preview":
      return (
        <>
          <TextField
            id={String(id)}
            fullWidth={fullWidth}
            placeholder={placeholder}
            name={name}
            size={size}
            type="file"
            disabled={disabled}
            variant={variant}
            InputProps={{
              ...InputProps,
              inputProps: {
                accept: "image/*,video/*",
              },
              endAdornment: (
                <InputAdornment position="end">
                  {formik?.values?.[name!] ? (
                    <IconButton onClick={() => setOpen(true)}>
                      <Tooltip title="View File">
                        <FaEye className="!text-red-600 text-xl" />
                      </Tooltip>
                    </IconButton>
                  ) : null}
                </InputAdornment>
              ),
            }}
            onChange={(e) => {
              let event = e as ChangeEvent<HTMLInputElement>;
              let file = event?.target?.files && event?.target?.files[0];
              if (fileSize && file && file?.size / 1000 > fileSize && formik)
                formik?.setFieldError(
                  name!,
                  `Please select a file under size ${fileSize}`
                );
              formik && formik.setFieldValue(name!, file);
            }}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            defaultValue={defaultValue}
          />
          <FilePreview
            open={open}
            onClose={() => setOpen(false)}
            fileValue={value as File}
          />
        </>
      );
    case "file-no-preview":
      return (
        <>
          <TextField
            id={String(id)}
            fullWidth={fullWidth}
            placeholder={placeholder}
            name={name}
            size={size}
            type="file"
            disabled={disabled}
            variant={variant}
            InputProps={{
              ...InputProps,
            }}
            onChange={(e) => {
              let event = e as ChangeEvent<HTMLInputElement>;
              let file = event?.target?.files && event?.target?.files[0];
              if (fileSize && file && file?.size / 1000 > fileSize && formik)
                formik?.setFieldError(
                  name!,
                  `Please select a file under size ${fileSize}`
                );
              formik && formik.setFieldValue(name!, file);
            }}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            defaultValue={defaultValue}
          />
        </>
      );
    case "checkbox":
      return (
        <FormControlLabel
          labelPlacement={labelPlacement}
          value={value}
          onChange={(e, newValue) => {
            formik && formik.setFieldValue(name!, newValue);
          }}
          control={
            <Checkbox
              checked={Boolean(value)}
              size={size}
              checkedIcon={checkedIcon} // pass the desire icon after click
              icon={checkboxIcon} // pass the desire icon before click
              sx={{
                color: "#005da6", // your primary color
                "&.Mui-checked": {
                  color: "#444791", // your primary dark color
                },
              }}
            />
          }
          label={label}
        />
      );
    case "checkbox-group":
      return (
        <FormGroup>
          {options &&
            options?.map((curOpt, i) => (
              <FormControlLabel
                key={i}
                labelPlacement={labelPlacement}
                value={curOpt.value}
                onChange={(e) => {
                  formik &&
                    formik.setFieldValue(
                      name!,
                      (e as ChangeEvent<HTMLInputElement>).target.value
                    );
                }}
                control={
                  <Checkbox
                    checked={value === curOpt?.value}
                    size={size}
                    checkedIcon={checkedIcon} // pass the desire icon after click
                    icon={checkboxIcon} // pass the desire icon before click
                    sx={{
                      color: "#005da6", // your primary color
                      "&.Mui-checked": {
                        color: "#444791", // your primary dark color
                      },
                    }}
                  />
                }
                label={curOpt.label}
              />
            ))}
        </FormGroup>
      );

    case "radio":
      return (
        <FormControlLabel
          onChange={(e, newValue) => {
            formik && formik.setFieldValue(name!, newValue);
          }}
          value={value}
          control={
            <Radio
              size={size}
              sx={{
                color: "#005da6", // your primary color
                "&.Mui-checked": {
                  color: "#444791", // your primary dark color
                },
              }}
            />
          }
          label={label}
        />
      );
    case "slider":
      return (
        <Slider
          sx={{
            color: "#005da6", // your primary color
          }}
          orientation={orientation}
          getAriaLabel={() => "Temperature range"}
          onChange={(e, newValue) => {
            formik && formik.setFieldValue(name!, newValue);
          }}
          valueLabelDisplay={valueLabelDisplay}
          step={step}
          size={size}
          marks={marks}
          min={min}
          max={max}
        />
      );
    case "select":
      return (
        <FormControl fullWidth>
          <InputLabel
            className={`${
              typeof value === "string" && value?.length !== 0 ? "!hidden" : ""
            }`}
          >
            {placeholder}
          </InputLabel>
          <TextField
            fullWidth={fullWidth}
            id={String(id)}
            size={size}
            select={true}
            name={name}
            value={value}
            variant={variant}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            label={label}
            InputProps={InputProps}
            error={error}
            helperText={helperText}
            defaultValue={defaultValue}
            placeholder={placeholder}
          >
            {options?.map((option) => (
              <MenuItem key={option?.value} value={option?.value}>
                {option?.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      );
    case "multi-select":
      return (
        <FormControl fullWidth>
          {label && label?.length > 0 && <InputLabel>{label}</InputLabel>}
          <Select
            variant={variant}
            multiple
            value={(value as string[]) || []}
            onChange={(e) => {
              const value = e?.target?.value as string[];
              formik && formik.setFieldValue(name!, [...value]);
            }}
            renderValue={(selected: string[]) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {options?.map((option, i) => (
              <MenuItem key={i} value={option?.value}>
                {option?.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    case "autocomplete":
      return (
        <Autocomplete
          id={String(id)}
          loading={loading}
          disableClearable
          options={options!?.map((option) => option)}
          value={options?.find((data) => data?.value === value)?.label as any}
          onChange={(event, newValue) => {
            if (newValue?.value) {
              setAutoCompleteValue && setAutoCompleteValue(value as string);
              formik && formik.setFieldValue(name!, newValue?.value);
            }
          }}
          noOptionsText={
            <div className="flex items-center gap-1">
              <MdNotInterested className="text-xl" />
              No Result Found
            </div>
          }
          renderInput={(params) => (
            <TextField
              {...params}
              value={value}
              InputProps={{
                ...params.InputProps,
                type: "search",
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
              fullWidth={fullWidth}
              placeholder={placeholder}
              name={name}
              variant={variant}
              id={String(id)}
              onBlur={onBlur}
              error={error}
              helperText={helperText}
            />
          )}
        />
      );
    case "multi-autocomplete":
      return (
        <Autocomplete
          id={String(id)}
          loading={loading}
          multiple
          disabled={disabled}
          options={options!?.map((option) => option)}
          value={
            options && value && (value as any[])?.length > 0
              ? (options?.filter((curOpt) =>
                  (value as any)?.some(
                    (curValue: any) => curValue?.value === curOpt.value
                  )
                ) as any)
              : []
          }
          onChange={(event, newValue) => {
            if (newValue) formik && formik.setFieldValue(name!, newValue);
            else formik && formik.setFieldValue(name!, "");
          }}
          noOptionsText={
            <div className="flex items-center gap-1">No Result Found</div>
          }
          renderInput={(params) => (
            <TextField
              {...params}
              value={value}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
              fullWidth={fullWidth}
              placeholder={placeholder}
              name={name}
              variant={variant}
              id={String(id)}
              onBlur={onBlur}
              error={error}
              helperText={helperText}
            />
          )}
        />
      );
    default:
      return (
        <TextField
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          size={size}
          type={type}
          id={String(id)}
          variant={variant}
          InputProps={InputProps}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          helperText={helperText}
          defaultValue={defaultValue}
        />
      );
  }
};

export default CustomInput;

const FilePreview = ({
  open,
  onClose,
  fileValue,
}: {
  open: boolean;
  onClose: () => void;
  fileValue?: File;
}) => {
  const fileType = fileValue?.name?.split(".")[1] || "jpg";
  console.log(fileValue?.name?.split("."));
  const filePreviewData = () => {
    switch (fileType) {
      case "jpg":
      case "png":
      case "jpeg":
      case "webp":
      case "svg":
        return (
          <img
            src={fileValue ? URL?.createObjectURL(fileValue) : ""}
            className="w-full object-cover h-80"
            alt="image"
          />
        );

      case "xlsx":
        return (
          <iframe
            src={fileValue ? URL?.createObjectURL(fileValue) : ""}
            height="200"
          ></iframe>
        );
    }
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <div className="p-5">
        {fileValue ? (
          <div className="relative flex flex-col gap-3 md:gap-5 w-full">
            {filePreviewData()}
            <button
              onClick={onClose}
              type="button"
              className="px-3 py-2 bg-primary text-white rounded-md"
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </Dialog>
  );
};
