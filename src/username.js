import React from "react";

const Username = (props) =>(
<>
<h5>Nama Saya : {props.Username}</h5>
<h4 className="bg-primary text-white text-center p-2">
Profile Saya 
<p>Asal Saya {props.daerah}</p> <p>Saya Pencinta {props.gender} Namun Saya Bukan {props.animal}</p> 
<p>Golongan darah Saya {props.goldar} , Hobi Saya {props.hobby} </p>
</h4> </>
);
Username.defaultProps = {
  Username: "Harris",
  daerah: "Bandung",
  gender: "Wanita",
  animal: "Buaya",
  goldar: "O",
  hobby:  "Ngusep",
};

export default Username;