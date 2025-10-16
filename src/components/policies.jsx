import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faBuildingColumns,
  faRotateLeft,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const policies = () => {
  return (
    <div className="policies-box">
      <div className="individual">
        <div className="policy-icon">
          <FontAwesomeIcon icon={faTruckFast} size="3x" />
        </div>

        <div className="polic-txt">
          <h6>Express Delivery</h6>
          <p>On all Orders</p>
        </div>
      </div>

      <div className="individual">
        <div className="policy-icon">
          <FontAwesomeIcon icon={faBuildingColumns} size="3x" />
        </div>
        <div className="polic-txt">
          <h6>EMI Available</h6>
          <p>Easy Installments</p>
        </div>
      </div>

      <div className="individual">
        <div className="policy-icon">
          <FontAwesomeIcon icon={faRotateLeft} size="3x" />
        </div>
        <div className="polic-txt">
          <h6>14 - Days Return</h6>
          <p>Shop with Confidence</p>
        </div>
      </div>

      <div className="individual">
        <div className="policy-icon">
          <FontAwesomeIcon icon={faUserShield} size="3x" />
        </div>
        <div className="polic-txt">
          <h6>Safe delivery</h6>
          <p>We value your Safety</p>
        </div>
      </div>
    </div>
  );
};

export default policies;
