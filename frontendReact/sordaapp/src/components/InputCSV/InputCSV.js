import { useState, useEffect } from "react";
import CSVmodal from './CSVmodal'
import "./InputCSV.css";

function InputCSV(props) {

  let fileReader;
  const [array, setArray] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);


  // handle the opened file and read results
  // parse the contents by endline,
  // then by comma and makesure there are no empty strings
  const handleFileRead = (e) => {
    const content = fileReader.result;
    let newArr = [];

    //go through content and split lines by endline
    let contentArr = content.split("\n");

    //go through content and split lines by commas
    contentArr.forEach((element) => {
      newArr.push(element.split(","));
    });

    //flatten 2D array and filter empty spaces if any
    let newArr2 = newArr.flat();
    let newArr3 = newArr2.filter((fruit) => fruit && fruit.trim());


    setArray(newArr3);
    setIsOpenModal(!isOpenModal);

    console.log(newArr3);
  };

  function checkRosterSize() {

  }


  //handles and opens file to be read
  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };


  function handleYesOrNoBtn(bool) {
    if (bool === true) {
      props.handleArray(array);
      setIsOpenModal(!isOpenModal);
    }
  }


   // useEffect(() => {
   //   setIsOpenModal(!isOpenModal);
   // }, []);


  return (
    <div className="upload-csv">
      <input
        type="file"
        id="file"
        className="input-file"
        accept=".csv"
        onChange={(e) => handleFileChosen(e.target.files[0])}
      />
      {isOpenModal && <CSVmodal arrayValue={array} handleBtnSubmit={handleYesOrNoBtn} />}
    </div>
  );
}

export default InputCSV;


// {array.map((strValue, index) => (
//   <div key={index}>{strValue}</div>
// ))}
