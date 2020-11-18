function validateForm(form) {
  const { title, description, dueDate } = form.elements;

  if (title.value.length > 4 && description.value.length > 4 && dueDate.value) {
    return true;
  }

  return false;
}

function initProject() {
  if (localStorage.getItem('allTodos') == null) {
    localStorage.setItem('allTodos', '[]');
  }
}

export { validateForm, initProject };