const categories = { frogpost: [{ url: `/posts/Sonorous-Warcry-of-a-Very-Angry-Frog/`, date: `09 Jul 2022`, title: `Sonorous Warcry of a Very Angry Frog`},],wednesday: [{ url: `/posts/Sonorous-Warcry-of-a-Very-Angry-Frog/`, date: `09 Jul 2022`, title: `Sonorous Warcry of a Very Angry Frog`},],bruh_moment: [{ url: `/posts/Sonorous-Warcry-of-a-Very-Angry-Frog/`, date: `09 Jul 2022`, title: `Sonorous Warcry of a Very Angry Frog`},],research: [{ url: `/posts/Ring0VBA-Getting-Ring0-Using-a-Goddamn-Word-Document/`, date: `09 Oct 2022`, title: `Ring0VBA - Getting Ring0 Using a Goddamn Word Document`},],vba: [{ url: `/posts/Ring0VBA-Getting-Ring0-Using-a-Goddamn-Word-Document/`, date: `09 Oct 2022`, title: `Ring0VBA - Getting Ring0 Using a Goddamn Word Document`},],driver-exploitation: [{ url: `/posts/Ring0VBA-Getting-Ring0-Using-a-Goddamn-Word-Document/`, date: `09 Oct 2022`, title: `Ring0VBA - Getting Ring0 Using a Goddamn Word Document`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};