import { easeCubicOut } from "d3-ease";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import React from "react";

const JoinGDC = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            idNumber: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div id="join-gdc-container">
            <motion.div
                id="join-gdc-container"
                initial={{ opacity: 0, translateY: "-50px" }}
                animate={{ opacity: 1, translateY: "0px" }}
                transition={{
                    ease: easeCubicOut,
                    duration: 0.5,
                }}
            >
                <form onSubmit={formik.handleSubmit}>
                    <h1
                        style={{
                            margin: "50px",
                            fontSize: "65px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Sign Up
                    </h1>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    <label>Student ID #</label>
                    <input
                        id="idNumber"
                        name="idNumber"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.idNumber}
                    />
                    <button className="button" type="submit">
                        Im Ready. Join!
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default JoinGDC;
