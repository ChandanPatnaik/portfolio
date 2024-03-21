/* eslint-disable @next/next/no-img-element */

import { Success } from "@/assets/utility";
import { CustomDialog, CustomInput } from "@/components/core";
import { configs } from "@/configs";
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import * as Yup from "yup";

type ValueProps =
  | {
      name: string;
      email: string;
      message: string;
    }
  | {
      [key: string]: string;
    };

const socialIconList = [
  {
    icon: <FiGithub />,
    link: "https://github.com/ChandanPatnaik",
    color: "bg-blue-600 text-white",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/chandan-patnaik/",
    color: "bg-blue-400 text-white",
  },
  {
    icon: <BiLogoGmail />,
    link: "mailto:chandanpatnaik81@gmail.com",
    color: "bg-orange-600 text-white",
  },
];

const ContactForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const contactSchema = [
    {
      key: "1",
      label: "Name",
      placeholder: "Enter your name",
      required: true,
      name: "name",
      type: "text",
      validationSchema: Yup.string().required("Name is required").trim(),
      initialValue: "",
      className: "w-full",
    },
    {
      key: "2",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
      name: "email",
      type: "text",
      validationSchema: Yup.string()
        .required("Email is required")
        .email("Invalid email")
        .trim(),
      initialValue: "",
      className: "w-full",
    },
    {
      key: "3",
      label: "Message",
      placeholder: "Enter your message",
      required: true,
      name: "message",
      type: "textarea",
      validationSchema: Yup.string().required("Message is required"),
      initialValue: "",
      className: "w-full",
      rows: 5,
    },
  ];

  const contactSchemaInitialValues: { [key: string]: string } =
    contactSchema.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.initialValue;
      return accumulator;
    }, {} as { [key: string]: string });

  const contactSchemaValidationSchema: {
    [key: string]: Yup.StringSchema<string>;
  } = contactSchema.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.validationSchema;
    return accumulator;
  }, {} as { [key: string]: Yup.StringSchema<string> });

  const handleSubmitSession = async (
    values: ValueProps,
    props: FormikHelpers<{ [key: string]: string }>
  ) => {
    try {
      setIsLoading(true);

      const res = await fetch(`${configs.server_url}/queries/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
        }),
      });
      const result = await res.json();
      console.log(result);
      if (result?.success) {
        setIsLoading(false);
        props.resetForm();
        setOpenDialog(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <section className="md:col-span-4 lg:col-span-5 w-full">
      <CustomDialog
        PaperProps={{
          style: {
            borderRadius: 18,
          },
        }}
        maxWidth="sm"
        fullWidth
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <div className="px-3 py-5 md:p-8 bg-dark-slate/80 flex w-full gap-2 md:gap-4 items-center justify-center flex-col">
          <div className="w-fit h-fit">
            <img src={Success.src} className="w-24 md:w-40" alt="success" />
          </div>
          <h1 className="text-xl md:text-3xl font-semibold text-milk/90">
            Thank You.
          </h1>
          <p className="text-milk/70 text-center text-sm">
            Your message has been received, and I will contact you shortly. If
            you would like to connect with me on social media for updates, feel
            free to follow me using the links below.
          </p>

          <div className="text-center w-full text-lg md:text-xl text-milk/80 font-semibold pt-0 md:pt-5">
            Follow Me
          </div>
          <div className="flex items-center gap-4 justify-center">
            {socialIconList.map((curIcon) => (
              <a href={curIcon.link} key={curIcon.link} target="_blank">
                <div
                  className={`${curIcon.color} w-10 h-10 text-white flex items-center justify-center rounded-lg text-lg`}
                >
                  {curIcon.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </CustomDialog>
      <Formik
        initialValues={contactSchemaInitialValues}
        validationSchema={Yup.object(contactSchemaValidationSchema)}
        onSubmit={handleSubmitSession}
        enableReinitialize={true}
      >
        {(formik) => (
          <Form className="w-full flex flex-col gap-3 md:gap-6">
            {contactSchema.map((inputItem) => (
              <Field name={inputItem.name} key={inputItem.key}>
                {(props: FieldProps<string>) => (
                  <div
                    className={`flex w-full gap-2 flex-col justify-center ${inputItem.className}`}
                  >
                    <p className="text-sm font-medium text-milk">
                      {inputItem.label}
                      {inputItem.required ? "*" : ""}
                    </p>
                    <div className="w-full">
                      <CustomInput
                        key={inputItem?.key}
                        InputProps={{
                          style: {
                            borderRadius: "3px",
                            height:
                              inputItem.type !== "textarea" ? "2.5rem" : "auto",
                            backgroundColor: "#e6e6e6",
                          },
                        }}
                        id={inputItem?.key}
                        name={inputItem?.name}
                        placeholder={inputItem?.placeholder}
                        fullWidth
                        type={inputItem?.type}
                        rows={inputItem?.rows}
                        value={formik?.values[inputItem?.name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(
                          formik?.touched[inputItem?.name] &&
                            formik?.errors[inputItem?.name]
                        )}
                        helperText={
                          formik?.touched[inputItem?.name] &&
                          formik?.errors[inputItem?.name]
                        }
                      />
                    </div>
                  </div>
                )}
              </Field>
            ))}

            <div className="flex flex-col">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-none col-span-full  py-2 bg-light-yellow font-semibold text-white rounded-sm"
              >
                {isLoading ? "Loading..." : "Submit Form"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
