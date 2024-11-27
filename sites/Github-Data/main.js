const input = document.querySelector(".input-field input");
const getReposBtn = document.querySelector(".input-field button");
const reposField = document.querySelector(".repos-field");

getReposBtn.addEventListener("click", () => retrieveAndShowData(input.value));

async function retrieveAndShowData(userName) {
  if (userName.length !== 0) {
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`,
    );
    const reposArr = await response.json();
    if (reposArr.length !== 0) {
      input.blur();
      reposField.innerHTML = "";
      reposArr.forEach(function (repo) {
        const repoDiv = document.createElement("div");
        repoDiv.classList.add("repo");
        reposField.appendChild(repoDiv);
        const repoName = document.createElement("p");
        repoName.textContent = repo.name;
        repoDiv.appendChild(repoName);
        const stars = document.createElement("p");
        stars.classList.add("stars");
        stars.textContent = `Stars ${repo.stargazers_count}`;
        const container = document.createElement("div");
        repoDiv.appendChild(container);
        container.appendChild(stars);
        const visit = document.createElement("a");
        visit.classList.add("visit");
        visit.textContent = "Visit";
        visit.href = repo.svn_url;
        visit.target = "_blank";
        container.appendChild(visit);
      });
    }
  }
}
