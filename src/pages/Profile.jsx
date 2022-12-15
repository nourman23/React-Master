import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { ProfileComponent } from "../components/ProfileComponent";
import { OrderHistory } from "../components/OrderHistory";
import { EditProfile } from "../components/EditProfile";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const signOut = useSignOut();
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  const logout = () => {
    signOut();
    navigate("/login");
  };
  return (
    <>
      <MDBRow className=" h-100 w-75 " style={{ marginTop: "50px" }}>
        <MDBCol
          size="3"
          className="h-100 text-white"
          style={{
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 0px 0px",
            marginTop: "30px",
            backgroundColor: "#3b3b3b",
          }}
        >
          <MDBTabs className="flex-column text-center">
            <MDBTabsItem className="py-5">
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab1")}
                active={verticalActive === "tab1"}
              >
                Profile
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem className="py-5">
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab2")}
                active={verticalActive === "tab2"}
              >
                Order history
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem className="py-5">
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab3")}
                active={verticalActive === "tab3"}
              >
                Edit Profile
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem className="py-5">
              <MDBTabsLink
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size="9" className="mt-5">
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === "tab1"}>
              <ProfileComponent />
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === "tab2"}>
              <OrderHistory />
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === "tab3"}>
              <EditProfile />
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </>
  );
}
