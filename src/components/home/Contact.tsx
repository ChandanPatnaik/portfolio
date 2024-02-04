/* eslint-disable @next/next/no-img-element */

import { database } from "@/configs/firebase.config";
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";
import * as Yup from "yup";
import { iconList } from "../common/SocialIconList";
import { CustomDialog, CustomInput } from "../core";

type ValueProps =
  | {
      name: string;
      email: string;
      message: string;
    }
  | {
      [key: string]: string;
    };

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center overflow-hidden bg-dark-slate shadow-[0_0_76px_0_rgba(10,7,22,0.004)]"
    >
      <div className="w-[88%] md:w-4/5 lg:w-3/5 h-full flex items-center relative">
        <TimeLine />
        <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8 w-full relative pl-6 md:pl-8">
          <div className="text-base font-light text-white/40 tracking-wide">{`Contact />`}</div>
          <div className="w-full grid-cols-1 md:grid-cols-5 grid lg:grid-cols-11 gap-y-6 md:gap-6 items-center">
            <ContactDetails />
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-0 left-0 h-[400%] w-4">
      <div className="w-0.5 h-10 md:h-14 bg-light-yellow"></div>
      <div className="w-2 h-2 border border-light-yellow rounded-full bg-transparent"></div>
      <div className="w-0.5 h-[calc(100%-4rem)] bg-light-yellow"></div>
    </div>
  );
};

const ContactDetails = () => {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 md:col-span-6">
      <div className="font-bold text-3xl md:text-4xl flex flex-col gap-0 md:gap-2 tracking-wider text-milk">
        <p className="">
          {`Let's find`.split("").map((curStr, i) => (
            <motion.span
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              exit={{ scale: 0, opacity: 0 }}
              key={i}
            >
              {curStr}
            </motion.span>
          ))}
        </p>
        <p className="">
          {`solution`.split("").map((curStr, i) => (
            <motion.span
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.07 + 0.7 }}
              exit={{ scale: 0, opacity: 0 }}
              key={i}
            >
              {curStr}
            </motion.span>
          ))}
        </p>
        <motion.p
          viewport={{ once: true }}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          exit={{ y: 20 }}
          className="text-red-500"
        >{`together?`}</motion.p>
      </div>

      <div className="text-milk/60 md:text-lg ">
        <p className="leading-6">
          Fill in the form or just use my contacts below.
        </p>
        <p className="leading-6">
          ‍If you need to put a project on the move, let’s work on it!
        </p>
      </div>

      <a
        href="mailto:chandanpatnaik81@gmail.com"
        target="_blank"
        className="text-milk tracking-wide hover:tracking-widest w-fit common-transition"
      >
        chandanpatnaik81@gmail.com
      </a>
    </div>
  );
};

const ContactUsForm = () => {
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
      await database.push("query", {
        ...values,
      });
      setIsLoading(false);
      props.resetForm();
      setOpenDialog(true);
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
            <img src="/success.gif" className="w-24 md:w-40" alt="success" />
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
            {iconList.map((curIcon) => (
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
