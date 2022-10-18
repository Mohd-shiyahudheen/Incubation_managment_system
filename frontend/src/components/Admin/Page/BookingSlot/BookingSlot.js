import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Header from '../../Header/Header';

const BookingSlot = () => {
  const [slotId, setSlotId] = useState([])
  const [slotSection, setSlotSection] = useState('')
  const [show, setShow] = useState(false);



  const handleClose = () => {
    setShow(false);
  };



  const [application, setApplication] = useState([])
  const [appId, setApplicantId] = useState("");

  const [sectionA, setSectionA] = useState([])
  const [sectionB, setSectionB] = useState([])
  const [sectionC, setSectionC] = useState([])
  const [sectionD, setSectionD] = useState([])


  const getSlots = async () => {
    const getslots = await axios.get('/api/admins/slots')
    console.log(getslots);
    const slots = getslots.data
    let displaySecA = slots.filter((item) => {
      return item.section === 'A'
    });
    console.log(displaySecA);
    setSectionA(displaySecA)

    let displaySecB = slots.filter((item) => {
      return item.section === 'B'
    });
    console.log(displaySecB);
    setSectionB(displaySecB)

    let displaySecC = slots.filter((item) => {
      return item.section === 'C'
    });
    console.log(displaySecC);
    setSectionC(displaySecC)

    let displaySecD = slots.filter((item) => {
      return item.section === 'D'
    });
    console.log(displaySecD);
    setSectionD(displaySecD)
  }

  const handleShow = (slot_id, slot_section) => {
    setSlotId(slot_id);
    // slotSection=slot_section
    setSlotSection(slot_section);
    // console.log("sotttt"+slotId, slotSection);

    setShow(true);
  };


  //fetching approved data from the database//
  const displayApplication = async () => {
    const displayapp = await axios.get('/api/admins/getApprovedApp')
    console.log('eee');
    console.log(displayapp.data);
    setApplication(displayapp.data)
  }

  const slotBooking = async (id) => {
    let appid = id
    console.log('%%%');
    setApplicantId(appid)
    console.log(appid, slotId, slotSection);
    const slotdata = { appid, slotId, slotSection }
    const slotbook = await axios.put('/api/admins/slotupdate', slotdata)
    console.log(slotbook.data);

  }

  const removeCompany = async () => {
    if (appId) {
      console.log('***');
      console.log(appId);
      const data = { appId }
      console.log(data);
      const response = await axios.put('/api/admins/removeduplicate', data)
      console.log(response.data);
      if (response.data) {
        setApplicantId("")
        handleClose()
      }
    } else {
      console.log("apllnull");
      handleClose();
    }
  }




  useEffect(() => {
    getSlots()
    displayApplication()

  }, [])
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className=' mt-3'>BOOK SLOT</h1>
        <div className="row g-5 ">
          <div className=" row-12">
            <div className="row g-3">
              {sectionA &&
                sectionA.map((item, index) => {
                  return (
                    <div className="col-1">
                      <div
                        style={{ height: "80px" }}
                        key={index}
                        className={`${item.selected ? " bg-success" : "bg-danger"
                          } `}
                        onClick={() => {
                          return item.selected
                            ? " "
                            : handleShow(item._id, item.section);
                        }}
                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className=" row-12">
            <div className="row g-3">
              {sectionB &&
                sectionB.map((item, index) => {
                  return (
                    <div className="col-1">
                      <div
                        style={{ height: "80px" }}
                        key={index}
                        className={`${item.selected ? " bg-success" : "bg-danger"
                          } `}
                        onClick={() => {
                          return item.selected
                            ? " "
                            : handleShow(item._id, item.section);
                        }}

                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className=" row-12">
            <div className="row g-3">
              {sectionC &&
                sectionC.map((item, index) => {
                  return (
                    <div className="col-1">
                      <div
                        style={{ height: "80px" }}
                        key={index}
                        className={`${item.selected ? " bg-success" : "bg-danger"
                          } `}
                        onClick={() => {
                          return item.selected
                            ? " "
                            : handleShow(item._id, item.section);
                        }}

                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className=" row-12">
            <div className="row g-3">
              {sectionD &&
                sectionD.map((item, index) => {
                  return (
                    <div className="col-1">
                      <div
                        style={{ height: "80px" }}
                        key={index}
                        className={`${item.selected ? " bg-success" : "bg-danger"
                          } `}
                        onClick={() => {
                          return item.selected
                            ? " "
                            : handleShow(item._id, item.section);
                        }}

                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  slotBooking(e.target.value);
                }}
              >
                <option selected>--select--</option>

                {application &&
                  application.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>

                        {item.company}
                      </option>
                    );
                  })}
              </select>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={removeCompany}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>

        </div>

      </div>

    </>
  );
}

export default BookingSlot;
