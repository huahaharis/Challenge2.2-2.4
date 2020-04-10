import React from "react";

const Greetings = (props) => (
 <> <h4 className="bg-primary text-white text-center p-2">
    Wellcome   <br /> {props.greet} <br /> Nama Saya {props.name} <br /> Umur Saya Sekarang {props.age}{" "}
    Tahun
    <br />
    Gender Saya {props.gender}
    <br /> {props.greet2}
  </h4> </>
);
Greetings.defaultProps = {
  greet: "Assalamualaikum WR WB",
  name: "Harris",
  age: "23",
  gender: "Pria",
  greet2: "Waalaikumsallam WR Wb",
};
export default Greetings;
