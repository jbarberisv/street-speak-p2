// const templateFormHandler = async function(event){
//     event.preventDefault();
//     const inputEl = document.querySelector("#input").value.trim();
//     const textAreaEl = document.querySelector("#text-output").value.trim();
//     const likeButtonEl = document.querySelector('button[name = "likebtn"]');
//     const hateButtonEl = document.querySelector('button[name = "hatebtn"]');
    
//     if(body){
//         await fetch("", {
//             method:POST ,
//             body:JSON.stringify({
//                 inputEl, 
//                 textAreaEl,
//                 likeButtonEl,
//                 hateButtonEl
//             }),
//             headers:{"Content-type":"appliation/json"},

//         })
//         document.location.reload();
//     }
// }
// document.querySelector("#template-submit").addEventListener("submit", templateFormHandler)




// const viewWords = async () => {
//     try {
//       const response = await fetch('api/words', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//       } else {
//         alert('Failed to fetch data.');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('An error occurred while fetching data.');
//     }
//   };
  
//   const viewbtn = document.getElementById("viewBtn");
//   viewbtn.addEventListener('click', viewWords);

//   const template = Handlebars.compile(sourceTemplate);

// // Render the template with the data
// const renderedHtml = template(data);

const viewWords = async () => {
  try {
    const response = await fetch('api/words', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      const template = Handlebars.compile(sourceTemplate);
      const renderedHtml = template({ words: data }); // Assuming the array is called "words" in the template
      // Use the rendered HTML to update the DOM or perform other actions
    } else {
      alert('Failed to fetch data.');
    }
  } catch (err) {
    
    alert('An error occurred while fetching data.');
  }
};

