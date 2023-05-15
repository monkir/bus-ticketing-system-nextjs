import dynamic from "next/dynamic";
import { Modal } from "flowbite-react";
import React from "react";
import { TextInput, Label } from "flowbite-react";

const DynamicDatepicker = dynamic(() => import("./MyDatepicker"), { ssr: false });

const Home = () => {
  return (
    <>
    <div className="grid justify-items-center ">
        <div className="flex flex-col gap-4 justify-center w-3/4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="username3"
        color="success"
        value="Your name"
      />
    </div>
    <TextInput
      id="username"
      placeholder="Bonnie Green"
      required={true}
      color="success"
      helperText={<React.Fragment><span className="font-medium">Alright!</span>{' '}Username available!</React.Fragment>}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="username4"
        color="failure"
        value="Your name"
      />
    </div>
    <TextInput
      id="username4"
      placeholder="Bonnie Green"
      required={true}
      color="failure"
      helperText={<React.Fragment><span className="font-medium">Oops!</span>{' '}Username already taken!</React.Fragment>}
    />
  </div>
</div>
    </div>

 
    </>
  );
};

export default Home;