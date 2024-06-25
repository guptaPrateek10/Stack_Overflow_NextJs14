import React from "react";

interface props {
  params: string | any;
  searchParams: any;
}
const page = ({ params }: props) => {
  return <div>Edit{params.id}</div>;
};

export default page;
