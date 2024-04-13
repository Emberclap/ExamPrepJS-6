window.addEventListener("load", solve);

function solve() {
  const [firstNameElement, lastNameElement, ageElement, storyTitleElement, publishBtnElement] = document.getElementsByTagName('input');
  const previewList = document.getElementById('preview-list');
  const genreElement = document.getElementById('genre')
  const storyElement = document.getElementById('story')


  function storyCreator(e) {
    e.preventDefault();
    if (firstNameElement.value === ''
      || lastNameElement.value === ''
      || ageElement.value === ''
      || storyTitleElement.value === ''
      || storyElement.value === ''
    ) { return; }

    const firstName = firstNameElement.value
    const lastName = lastNameElement.value
    const age = ageElement.value
    const storyTitle = storyTitleElement.value
    const story = storyElement.value


    const liElement = document.createElement('li');

    const h4Element = document.createElement('h4');
    h4Element.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

    const pAgeElement = document.createElement('p')
    pAgeElement.textContent = `Age: ${ageElement.value}`
    const pTitleElement = document.createElement('p')
    pTitleElement.textContent = `Title: ${storyTitleElement.value}`
    const pGenreElement = document.createElement('p')
    pGenreElement.textContent = `Genre: ${genreElement.value}`
    const pStoryElement = document.createElement('p')
    pStoryElement.textContent = `${storyElement.value}`

    const articleElement = document.createElement('article');
    articleElement.appendChild(h4Element)
    articleElement.appendChild(pAgeElement)
    articleElement.appendChild(pTitleElement)
    articleElement.appendChild(pGenreElement)
    articleElement.appendChild(pStoryElement)

    const saveBtnElement = document.createElement('button')
    saveBtnElement.classList.add('save-btn');
    saveBtnElement.textContent = 'Save Story';
    saveBtnElement.addEventListener('click', saveStory)

    const editBtnElement = document.createElement('button')
    editBtnElement.classList.add('edit-btn');
    editBtnElement.textContent = 'Edit Story';
    editBtnElement.addEventListener('click', () => {
      firstNameElement.value = firstName
      lastNameElement.value = lastName
      ageElement.value = age
      storyTitleElement.value = storyTitle
      storyElement.value = story
      publishBtnElement.disabled = false;
      liElement.remove()
    })

    const deleteBtnElement = document.createElement('button')
    deleteBtnElement.classList.add('delete-btn');
    deleteBtnElement.textContent = 'Delete Story';
    deleteBtnElement.addEventListener('click', () => {
      liElement.remove();
      publishBtnElement.disabled = false;
    })
    liElement.classList.add('story-info');
    liElement.appendChild(articleElement);
    liElement.appendChild(saveBtnElement);
    liElement.appendChild(editBtnElement);
    liElement.appendChild(deleteBtnElement);

    previewList.appendChild(liElement);
    publishBtnElement.disabled = true;
    clearInputData()
  }
  publishBtnElement.addEventListener('click', storyCreator);
  function saveStory() {
    const mainElement = document.getElementById('main')
    mainElement.innerHTML = ''
    const h1Element = document.createElement('h1');
    h1Element.textContent = "Your scary story is saved!";
    mainElement.appendChild(h1Element)
  }
  function clearInputData() {
    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    storyTitleElement.value = '';
    storyElement.value = '';
  }

}
