import React, { useEffect, useState } from 'react';
import './RosterSection.css';
import RosterItem from '../RosterItem/RosterItem';
import NewItemButton from '../NewItemButton/NewItemButton';
import InputCSV from '../InputCSV/InputCSV'
import { nanoid } from 'nanoid';

function RosterSection (props) {
  const rosterMax = 40;

  function handleArrayFromInputCSV(arrayFromInputCSV) {
    props.handleArrayFromRosterSection(arrayFromInputCSV);
  }

  return (
      <div className="roster-section">
          <header className="roster-section-header">
              <div className="roster-header-caption">
                  Roster/Items
              </div>
              <InputCSV className='csvInputModal' handleArray={handleArrayFromInputCSV}/>
              {props.rosterItems.length < rosterMax ?
                  <NewItemButton onClick={props.addItem} /> :
                  <div></div>
              }
          </header>
          <div className="roster-items-container">
              <div id="roster-display-wrapper">
                  {props.rosterItems.map((item, index) =>
                      <RosterItem
                          key={nanoid()}
                          title={item.name}
                          index={index}
                          updateItemName={props.updateItemName}
                          deleteItem={props.deleteItem}
                      />
                  )}
              </div>
          </div>
      </div>
  )
}
export default RosterSection;



// const rosterMin = props.rosterItems;


// // CREATE GENERIC LIST ITEMS BASED ON CHOSEN MENU SELECT OPTION
// generateItems(num) {
//     console.log('Generate roster list based on...', num);

//     let roster = [];    // Reset the roster items array
//     let showRoster = this.state.showRoster;

//     // Populate the roster array with chosen number of entries
//     for (let i=0; i<num; i++) {
//         let genericName = "Item " + (i + 1);
//         let key = nanoid();
//         let item = {                // TO DO:  Replace with formatted class?
//             description: genericName,
//             key : key,
//             group: null
//         }

//         roster.push(item);
//     }

//     this.setState({
//         roster: roster
//     });
// }


//     // Add multiple entries to group array from MODAL INPUT
//     const generateRoster = (e) => {
//         console.log("Generating multiple roster items...");
//         let qty = e.target.innerText;
//         // let groups = this.state.groups;
//         // let showAddButton = this.state.showAddButton;
//         // showAddButton = false;

//         // Populate the groups array with chosen number of entries
//         for (let i=0; i<qty; i++) {
//             this.addItem();
//         }

//         // this.setState({
//         //     groups: groups,
//         //     showGroupMenu: showGroupMenu
//         // });
//     }
