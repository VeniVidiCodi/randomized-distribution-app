let state = {
                "id": "auto-generated",
                "created": new Date(),
                "deleteDate": "calculated",
                "data": {
                    "groups": [],
                    "roster": ['A', 'B', 'C']
                },
                "results": []
            };
            
        let rosterArray = state.data.roster;
        // console.log(rosterArray); 

        // PROJECT TIME DATA  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

        // Get Project Timestamp
        let fullDate = new Date();
        // console.log("DATE OBJ:", fullDate);
        let timestamp = Date.now();
        // console.log("NOW:", timestamp);
        let date = fullDate.getDate();
        let later;
        let deleteTime;
        
        // Calculate Project Termination Deadline
        let days = 2;   // 48hr Time Limit
        let timeLimit = days * 86400000;   // # of Days * Milliseconds per day        
        deleteTime = timestamp + timeLimit;
        // console.log("LIMIT:", timeLimit);
        // console.log("END:", deleteTime);

        // Convert adjusted time back to UTC format
        let deadline = new Date(deleteTime);
        // console.log("DEADLINE:", deadline);

        // Display Project TimeStamp & Deadline
        let dateDisplay = document.getElementById('created');
        dateDisplay.innerText = "Created: " + fullDate;
        let deadlineDiv = document.getElementById('deadline');
        deadlineDiv.innerText = "Deadline: " + deadline;
        

        // TARGET DOM ELEMENTS  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

        // Get Group & Roster Category Elements 
        let groupSection = document.getElementById('groups');
        // console.log(groupSection);
        let rosterSection = document.getElementById('roster');
        console.log("roster::", rosterSection);
        

        // FUNCTIONS  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

        function renderRoster() {
            for (let item of rosterArray) {
                let div = document.createElement('div');
                div.innerText =`${item}`;
                // console.log(div);
                rosterSection.appendChild(div);
            }
        }

        function addRosterItem() {
            // creates new element
            let div = document.createElement('div');
            div.className = 'r_item';
            let innerText = 'Add Description';
            div.innerText = innerText;
            console.log(div);
            
            // *** perhaps instantiates from a roster item component prototype???
            
            // pushes value to roster array in state 
            rosterArray.push(innerText);
            // console.log(div);

            // adds node to DOM
            // rosterSection.appendChild(div);
            // console.log(rosterSection);
            // console.log(rosterArray); 
            renderRoster();
        console.log(rosterArray); 

        }

        function editRosterItem(e) {
            // For input value
            let input = e.value;
            console.log(input);
            // Get 
            // Find corresponding index of item in array
            rosterArray.indexOf(el) ? 
            // If not in array, do this...
            console.log('Nothing by that found') : 
            // If found, reassign input value
            console.log('Found!')
            // Keep index, update value
            rosterArray[index] = el;
        }

        // function deleteRosterItem(e) {
            // same as edit function
            // but, slice out index entry
        // }

        // User gives number input, 
        // function generateGroups(num) {
        //     let arr = new Array(num);
        //     console.log(arr);

        //     for (let i=1; i<num+1; i++) {
        //         let entry = `Entry ${i}`;
        //         arr[i] = entry;
        //         let item = document.createElement('div');
        //         item.className = 'r_item';
        //         item.id = `group-${entry}`;
        //         item.innerText = 'Description';
        //         item.classList.add(`group-${entry}`);

        //     }
        //     console.log(arr);
        // }

        function renderSelectInput() {
            let selector = document.getElementById("roster-select");
            console.log(selector);
            return selector;
        }
renderRoster();
renderSelectInput();