const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
  
    if (content) {
      console.log(content);
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ body: content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/post');
      } else {
        alert('Failed to create comment');
      }
    }
  };

document
.querySelector('.new-comment-form')
.addEventListener('submit', newCommentHandler);