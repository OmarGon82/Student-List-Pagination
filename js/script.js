/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   


const studentList = document.getElementsByClassName("student-item cf");    //made a const to hold an HTML collection.
const studentsPerPage = 10;      //made constant to hold how many students I want to display per page.

//created a funciton that will display the students on the page. It takes two parameters.
const showPage = (list, page) => {
   const startIndex = (page * studentsPerPage) - studentsPerPage; //I set a start index of the students of the students to be displayed.
   const endIndex = (page * studentsPerPage) -1;   //I set the end index of the students to be displayed.
   studentList.display = 'none';    //hide all students at the start
   for(let i = 0; i < list.length; i ++) {   //created a loop for this parameter(it will be the studentList const)
      if(i >= startIndex && i <= endIndex) { // if the students index  is between the start and end index
         list[i].style.display = '';   // it will display that student.
      } else {
        list[i].style.display = 'none';   //else it will hide the student.
      }
   }
}

//created a function that will append the page links, it takes one parameter.It will be the studentList const.
const appendPageLinks = (list) => {
   const neededPages = list.length / studentsPerPage;   // calculated how many pages need to be created.
   const pageDiv = document.querySelector('.page');   // selected the div with the page class.
   const div = document.createElement('div');      //created a new div element
   div.className = 'pagination';    //gave the newly created div a class of 'pagination'
   pageDiv.appendChild(div);     // appened the new div to the div with the page class. It is now nested in the mainDiv
   const ul = document.createElement('ul');  //created an unordered list.
   div.appendChild(ul);    //appended the newly created unordered list to the 'pagination' div.
   
   for( i = 0; i < neededPages; i ++ ){   //created a for loop to loop through all the pages.
      const pageNum = i + 1;  // created page buttons. So the page numbers start at 1 not 0 we add 1 to every itteration.
      const li = document.createElement('li');  //created a list element.
      const a = document.createElement('a'); //created an anchor element.
      li.appendChild(a);    //appended the anchor element to the list element.
      a.setAttribute("href","#");  // give each anchor element an href attribute.
      a.textContent = pageNum;      //set each anchor to display a page number using the pageNum constant and the textContent of a.
      ul.appendChild(li);          //appended all li's to the unordered list.                 
      const anchorTag = document.getElementsByTagName('a');   // selected the anchor element by its tag name
      anchorTag[0].className = "active";  //set an active class to the to the first li
      
      for (let i = 0; i < anchorTag.length; i++){  // created a loop to give all anchor tags an event listener.
         anchorTag[i].addEventListener('click', (e) => { //assign an click even listener to each anchor tag.
           const pageNum = e.target.textContent;   // put the event.target and its textContent in a constant called pageNum(differnt scope from previous pageNum)
      
           for (let i = 0; i < anchorTag.length ;i++) {  
            
            if( anchorTag.className === "active") { 

               pageNum.classList.remove("active"); 
            }
              pageNum.className = "active";    
          }
          
          showPage(studentList,pageNum);    //the showpage function is called again inside the event listener with this studentList and the pageNum
         });                               //the pageNum parameter will now show the page number that is clicked on.
      }
      
   }
   
}
showPage(studentList,1);   // we call the showPage function with the student list and paramenter of 1 so the first page is initially displayed. 
appendPageLinks(studentList);    //finally we call our appendPageLinks function with the studentList paramenter.  
//fun fact because the functions are on the global scope and so are paraments (the student constant) the order we call the functions in doesn't matter.
   
      


                 





