
function validateForm() {
  const form=document.getElementById('contactForm');
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const FormMsg= document.getElementById('FormMsg');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    FormMsg.textContent = "All fields are required.";
   FormMsg.style.color = "red";
    return false;
  }

  if (!emailRegex.test(email)) {
   FormMsg.textContent = "Please enter a valid email address.";
   FormMsg.style.color = "red";
    return false; 
  }

  FormMsg.textContent = "Form submitted successfully!";
 FormMsg.style.color = "green";
 form.reset();
 setTimeout(()=>{
  FormMsg.textContent="";
 },1000);
  return false; 
   
}


   let taskCount = 0;

    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskList = document.getElementById('taskList');
      const outputMessage = document.getElementById('outputMessage');
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

     
        li.onclick = () => li.remove();

        taskList.appendChild(li);
        taskInput.value = '';
        outputMessage.textContent = `✅ Task "${taskText}" added successfully!`;
        outputMessage.style.color = 'green';

        taskCount++;

  
        if (taskCount === 3) {
          setTimeout(() => {
            const confirmSave = confirm("📝 Do you want to save the tasks?");
            if (confirmSave) {
              outputMessage.textContent = "✅ Tasks saved successfully!";
              outputMessage.style.color = 'green';
            } else {
              taskList.innerHTML = '';
              outputMessage.textContent = "❌ Tasks not saved and cleared.";
              outputMessage.style.color = 'red';
            }
            taskCount = 0; 
          }, 100);
        }

      } else {
        outputMessage.textContent = '⚠️ Please enter a valid task.';
        outputMessage.style.color = 'red';
      }
    }
 function addImage() {
      const urlInput = document.getElementById('imageURL');
      const gallery = document.getElementById('gallery');
      const message = document.getElementById('gallerymessage');
      const imageUrl = urlInput.value.trim();

      if (imageUrl !== '') {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "User added image";

  
        img.onclick = () => {
          img.remove();
          message.textContent = "🗑️ Image removed!";
          message.style.color = "red";
        };
       
  
        img.onload = () => {
          gallery.appendChild(img);
          message.textContent = "✅ Image added successfully!";
          message.style.color = "green";
        };

    
        img.onerror = () => {
          message.textContent = "❌ Invalid image URL.";
          message.style.color = "red";
        };

        urlInput.value = '';
      } else {
        message.textContent = "⚠️ Please enter an image URL.";
        message.style.color = "orange";
      }
    }