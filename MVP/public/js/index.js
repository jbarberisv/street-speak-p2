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






const newCommentFormHandler = async (event) => {
  event.preventDefault();

  const word_id = parseInt(window.location.pathname.split('/').pop());

  const content = document.querySelector('#content-new-comment').value.trim();

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text: content, word_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload(); 
    } else {
      console.log('Response status:', response.status);
      console.log('Response text:', await response.text());
      alert('Failed to create a comment.'); 
    }
  }
};




const newCommentForm = document.querySelector('.new-comment-form');
if (newCommentForm) {
  newCommentForm.addEventListener('submit', newCommentFormHandler);
}

