import dynamic from "next/dynamic";
import { Modal } from "flowbite-react";

const DynamicDatepicker = dynamic(() => import("./MyDatepicker"), { ssr: false });

const Home = () => {
  return (
    <>
     <Modal
    show={true}
    size="md"
    popup={true}
    // onClose={onClose}
    >
      <Modal.Header />
      <Modal.Body>
        
      <DynamicDatepicker />
      {/* {addCustomer} */}

      </Modal.Body>
    </Modal>
    </>
  );
};

export default Home;