"use client";

const Hooks = ({ params }) => {
  const id = params.route;
  return <p>Testing Dynamic Routes: {id}</p>
};

export default Hooks;