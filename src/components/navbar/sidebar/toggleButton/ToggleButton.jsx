import React from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="30" height="25" viewBox="0 0 100 99">
        <motion.path
          stroke="#473183"
          strokeWidth="11"
          strokeLinecap="round"
          variants={{closed: {d:"M6 6H96"}, open: {d:"M7 6L94 93"}} }
        />
        <motion.path
          d="M6 91H96"
          stroke="#473183"
          strokeWidth="11"
          strokeLinecap="round"
          variants={{closed: {opacity: 1}, open: { opacity: 0}}}
        />
        <motion.path
          stroke="#473183"
          strokeWidth="11"
          strokeLinecap="round"
          variants={{closed: {d:"M6 49H96"}, open: {d:"M92 6L6.00003 92.8753"}} }
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
