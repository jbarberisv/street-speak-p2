
const deletePostFormHandler = async (event) => {
  event.preventDefault();

  const wordId = event.target.getAttribute("data-post-id");

  const response = await fetch(`/api/words/${wordId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard"); 
  } else {
    alert("Failed to delete a post."); 
  }
};


const deletePostButtons = document.querySelectorAll(".delete-post");

deletePostButtons.forEach((button) => {
  button.addEventListener("click", deletePostFormHandler);
});

//------------
document.addEventListener("DOMContentLoaded", () => {

  const word_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];


  const updatePostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title-update-post").value.trim();
    const content = document
      .querySelector("#content-update-post")
      .value.trim();

    if (title && content) {
      const response = await fetch(`/api/words/${word_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/dashboard"); 
      } else {
        alert("Failed to update a post."); 
      }
    }
  };


  const deletePostFormHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/words/${word_id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard"); 
    } else {
      alert("Failed to delete a post."); 
    }
  };


  const updatePostButton = document.querySelector("#update-post");

  if (updatePostButton) {
    updatePostButton.addEventListener("click", updatePostFormHandler);
  }

  const deletePostButton = document.querySelector("#delete-post");

  if (deletePostButton) {
    deletePostButton.addEventListener("click", deletePostFormHandler);
  }
});
