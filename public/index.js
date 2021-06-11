const questionContainer = document.getElementById("questionContainer");

const questions = [
  {
    id: "question-1",
    title: "What is Netflix?",
    answer: [
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
      "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    ],
  },
  {
    id: "question-2",
    title: "How much does Netflix cost?",
    answer: [
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
    ],
  },
  {
    id: "question-3",
    title: "Where can I watch?",
    answer: [
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    ],
  },
  {
    id: "question-4",
    title: "How do I cancel?",
    answer: [
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    ],
  },
  {
    id: "question-5",
    title: "What can I watch on Netflix?",
    answer: [
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    ],
  },
  {
    id: "question-6",
    title: "Is Netflix good for kids?",
    answer: [
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    ],
  },
];

//  <p class="subtitle p-5 py-7" >${content}</p>;

for (let i = 0; i < questions.length; i++) {
  questionContainer.innerHTML += `<div class="bg-gray-800 0 lg:w-4/5 m-auto mt-2">
            <div
              class="
                flex
                justify-between
                items-center
                lg:py-3
                px-5
                cursor-pointer
                border-black border-b
              "
              onclick = "handleClick(this)" answerId = ${questions[i].id}
            >
              <p class="subtitle">${questions[i].title}</p>
              <div class="cursor-pointer qsn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class= "h-12 w-8 lg:w-12 icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <div class="hidden ans" id= ${questions[i].id}>
            </div>
          </div>`;
  for (let j = 0; j < questions[i].answer.length; j++) {
    const para = document.createElement("p");
    para.classList.add("subtitle", "p-5", "py-7");
    para.innerHTML = questions[i].answer[j];
    document.querySelector(`#${questions[i].id}`).append(para);
  }
}

function handleClick(e) {
  const id = e.getAttribute("answerId");

  const ans = document.querySelectorAll(".ans");
  for (let key of ans) {
    if (!key.classList.contains("hidden") && key.id != id) {
      key.classList.add("hidden");
    }
  }
  document.querySelector(`#${id}`).classList.toggle("hidden");
  const plusBtn = document.querySelectorAll(".icon");

  for (let i = 0; i < plusBtn.length; i++) {
    if (plusBtn[i].parentElement.parentElement.getAttribute("answerId") != id) {
      plusBtn[i].classList.remove("transform");
      plusBtn[i].classList.remove("rotate-45");
    }
  }
  for (let i = 0; i < plusBtn.length; i++) {
    if (plusBtn[i].parentElement.parentElement.getAttribute("answerId") == id) {
      plusBtn[i].classList.toggle("transform");
      plusBtn[i].classList.toggle("rotate-45");
    }
  }
}
